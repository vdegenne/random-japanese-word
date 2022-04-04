import { LitElement, html, css } from 'lit'
import { customElement, query, state } from 'lit/decorators.js'
import '@material/mwc-snackbar'
import '@material/mwc-button'
import '@material/mwc-icon-button'
// import '@material/mwc-dialog'
// import '@material/mwc-textfield'
// import '@material/mwc-checkbox'
import data from '../docs/data/data.json'
import { Word, WordObject } from './types'
import { googleImageSearch, jishoSearch, playMissingSound } from './util'
import { Button } from '@material/mwc-button'

import jlpt1 from '../docs/data/jlpt1-words.json'
import jlpt2 from '../docs/data/jlpt2-words.json'
import jlpt3 from '../docs/data/jlpt3-words.json'
import jlpt4 from '../docs/data/jlpt4-words.json'
import jlpt5 from '../docs/data/jlpt5-words.json'
import { sharedStyles } from './sharedStyles'
const jlpts = [jlpt5, jlpt4, jlpt3, jlpt2, jlpt1];

declare global {
  interface Window {
    app: AppContainer;
    toast: (labelText: string, timeoutMs?: number) => void;
  }
}

@customElement('app-container')
export class AppContainer extends LitElement {
  private _data: Word[] = [];

  @state() word!: WordObject
  @state() noSound = true;

  private _excludes: string[] = []

  @query('mwc-icon-button[icon=menu_book]') jishoButton!: Button;
  @query('mwc-icon-button[icon=casino]') randomButton!: Button;
  @query('mwc-icon-button[icon=image]') imageButton!: Button;

  constructor () {
    super()
    // this.prepareData()
    this.pickNewWord()

    this._excludes = localStorage.getItem('random-japanese-word:excludes') ? JSON.parse(localStorage.getItem('random-japanese-word:excludes')!.toString()) : [];

    window.addEventListener('keypress', (e) => {
      if (e.key === 'g') {
        this.jishoButton.click()
      }
      if (e.key === ' ') {
        this.randomButton.click()
      }
      if (e.key === 's') {
        this.playAudio()
      }
      if (e.key === 'a') {
        this.imageButton.click()
      }
    })
  }

  static styles = [ sharedStyles, css`
  :host {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: black;
  }
  #jlpt {
    /* position: absolute;
    top: 0;
    left: 3px; */
    color: white;
  }
  #word {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5em;
    flex:1;
    color: white;
    font-family: 'Zen Old Mincho', serif;
  }
  [controls] {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding:12px;
    box-sizing: border-box;
  }
  `]

  render () {

    return html`
    <div style="width:-webkit-fill-available;padding:6px">
      <span id=jlpt class="jlpt${this.word.jlpt}-color">jlpt ${this.word.jlpt}</span>
    </div>

    <div id=word
      @click=${()=>{/*jishoSearch(this.word.word)*/}}>${this.word.word}</div>

    <div controls>
      <div>
        <mwc-icon-button icon=image style="color:#2196f3"
          @click=${() => { googleImageSearch(this.word.word) }}></mwc-icon-button>
        <mwc-icon-button icon=menu_book style="color:#4caf50"
          @click=${() => { jishoSearch(this.word.word) }}></mwc-icon-button>
        <mwc-icon-button icon=volume_up style="color:white"
          ?disabled=${this.noSound}
          @click=${() => { this.playAudio() }}></mwc-icon-button>
      </div>

      <!-- <mwc-icon-button icon=delete style="color:#e53935"
        @click=${_=>{this.addToExcludes(this.word[0])}}></mwc-icon-button> -->
      <mwc-icon-button icon=casino style="color:white"
        @click=${_=>this.pickNewWord()}></mwc-icon-button>
    </div>
    `
  }

  prepareData () {
    // this._data = data.filter(word => word.lemma.length > 2)
  }

  pickNewWord() {
    this.word = this.getNewWord()
    this.playAudio()
  }

  private _audio?: HTMLAudioElement;
  playAudio () {
    let url = `https://assiets.vdegenne.com/data/japanese/audio/${encodeURIComponent(this.word.hiragana || this.word.word)}`;
    if (!this._audio || this._audio.src !== url) {
      // load the new audio
      this.noSound = false // assuming there is a sound before loading
      this._audio = new Audio(url)
      this._audio.onerror = ()=>{
        console.log('error')
        window.toast('audio not found', 2000)
        playMissingSound()
        this.noSound = true
      }
    }
    this._audio.play()
  }

  getNewWord (): WordObject {
    // return this._data[~~(Math.random() * this._data.length)]
    const jlpt = ~~(Math.random() * 3)
    const word = jlpts[jlpt][~~(Math.random() * jlpts[jlpt].length)] as Word
    return {
      jlpt: 5 - jlpt as 5|4|3,
      word: word[0],
      hiragana: word[1],
      english: word[2]
    }
  }

  // DEPRECATED
  addToExcludes (word) {
    this._excludes = [...new Set([...this._excludes, word])]
    localStorage.setItem('random-japanese-word:excludes', JSON.stringify(this._excludes))
    this.pickNewWord()
  }
}
