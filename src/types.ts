// export type Word = {
//   rank: number;
//   lemma: string;
//   frequency: number;
// }


export type Word = [word:string, hiragana:string|'', english:string]
export type WordObject = {
  jlpt: 5|4|3|2|1;
  word: string;
  hiragana?: string|'';
  english: string;
}