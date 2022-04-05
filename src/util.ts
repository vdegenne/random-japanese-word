export function jishoSearch (word) {
  window.open(`https://jisho.org/search/${encodeURIComponent(word)}`, '_blank')
}

export function googleImageSearch (word) {
  window.open(`http://www.google.com/search?q=${encodeURIComponent(word)}&tbm=isch`, '_blank')
}



const _missingSound = new Audio('./audio/empty.mp3')
export function playMissingSound () {
  _missingSound.play()
}

export async function sleep (timeoutMs: number) {
  await new Promise(r=>setTimeout(r,timeoutMs))
}

export const interleave = ([ x, ...xs ], ...rest) =>
  x === undefined
    ? rest.length === 0
      ? []
      // @ts-ignore
      : interleave (...rest)
    // @ts-ignore
    : [ x, ...interleave (...rest, xs) ]