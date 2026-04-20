export default defineEventHandler(async (event) => {
  setHeader(event, 'Content-Type', 'application/rss+xml; charset=utf-8')

  const siteUrl = 'https://blog.shaswata.me'
  const buildDate = new Date().toUTCString()

  const posts = await queryCollection(event, 'blog')
    .where('published', '=', true)
    .order('date', 'DESC')
    .all()

  const items = posts.map((post) => {
    const postUrl = `${siteUrl}/posts${post.path}`
    const pubDate = post.date ? new Date(post.date).toUTCString() : buildDate
    return `
    <item>
      <title><![CDATA[${post.title ?? ''}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${(post as { description?: string }).description ?? ''}]]></description>
    </item>`
  }).join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Shaswata's Blog</title>
    <link>${siteUrl}</link>
    <description>Blog of Shaswata Das — Software Engineer, Developer, Hacker.</description>
    <language>en-us</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`
})
