export function jishoSearch (word) {
  window.open(`https://jisho.org/search/${encodeURIComponent(word)}`, '_blank')
}