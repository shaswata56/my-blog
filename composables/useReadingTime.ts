export const useReadingTime = (body: unknown): number => {
  const extractText = (node: unknown): string => {
    if (typeof node === 'string') return node
    if (Array.isArray(node)) return node.map(extractText).join(' ')
    if (node && typeof node === 'object') {
      const obj = node as Record<string, unknown>
      if (obj.value) return extractText(obj.value)
      if (obj.children) return extractText(obj.children)
    }
    return ''
  }
  const text = extractText(body)
  const words = text.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 200))
}
