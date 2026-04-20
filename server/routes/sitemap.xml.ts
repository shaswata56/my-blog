export default defineEventHandler(async (event) => {
  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')

  const siteUrl = 'https://blog.shaswata.me'

  const posts = await queryCollection(event, 'blog')
    .where('published', '=', true)
    .order('date', 'DESC')
    .all()

  const urls = posts.map((post) => {
    const loc = `${siteUrl}/posts${post.path}`
    const lastmod = post.date ? new Date(post.date).toISOString().split('T')[0] : ''
    return `
  <url>
    <loc>${loc}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
    <changefreq>monthly</changefreq>
  </url>`
  }).join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${siteUrl}/archive</loc>
    <changefreq>weekly</changefreq>
  </url>
  ${urls}
</urlset>`
})
