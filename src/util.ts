export function jishoSearch (word) {
  window.open(`https://jisho.org/search/${encodeURIComponent(word)}`, '_blank')
}

export function googleImageSearch (word) {
  window.open(`http://www.google.com/search?q=${encodeURIComponent(word)}&tbm=isch`, '_blank')
}