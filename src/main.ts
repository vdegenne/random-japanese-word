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
import { googleImageSearch, interleave, jishoSearch, playMissingSound } from './util'
import { Button } from '@material/mwc-button'
import './speech'

import './loop-player'

import jlpt1 from '../docs/data/jlpt1-words.json'
import jlpt2 from '../docs/data/jlpt2-words.json'
import jlpt3 from '../docs/data/jlpt3-words.json'
import jlpt4 from '../docs/data/jlpt4-words.json'
import jlpt5 from '../docs/data/jlpt5-words.json'
import { sharedStyles } from './sharedStyles'
import { speak } from './speech'
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

  private _audio?: HTMLAudioElement;

  private _excludes: string[] = []

  @query('mwc-icon-button[icon=menu_book]') jishoButton!: Button;
  @query('mwc-icon-button[icon=casino]') randomButton!: Button;
  @query('mwc-icon-button[icon=image]') imageButton!: Button;

  constructor () {
    super()
    // this.prepareData()
    this.pickNewWord(false)

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
    font-size: 6em;
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
  header {
    width: -webkit-fill-available;
    padding: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  `]

  render () {

    return html`
    <header>
      <span id=jlpt class="jlpt${this.word.jlpt}-color">jlpt ${this.word.jlpt}</span>
      <loop-player></loop-player>
    </header>

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
        @click=${()=>{this.onCasinoButtonClick()}}></mwc-icon-button>
    </div>
    `
  }

  async onCasinoButtonClick () {
    try {
      await this.pickNewWord()
    } catch (e) {
      window.toast('audio not found', 2000)
      playMissingSound()
    }
  }

  prepareData () {
    // this._data = data.filter(word => word.lemma.length > 2)
  }

  async pickNewWord(playAudio = true) {
    this.word = this.getNewWord()
    if (!playAudio) { return }
    try {
      await this.playAudio()
    } catch (e) {
      throw e
    }
  }

  playAudio () {
    return new Promise((resolve, reject) => {
      let url = `https://assiets.vdegenne.com/data/japanese/audio/${encodeURIComponent(this.word.hiragana || this.word.word)}`;
      if (!this._audio || this._audio.src !== url) {
        // load the new audio
        this.noSound = false // assuming there is a sound before loading
        this._audio = new Audio(url)
        this._audio.onerror = ()=>{
          this.noSound = true
          reject('sound not found')
        }
        this._audio.onended = resolve
      }
      this._audio.play()
    })
  }

  getNewWord (): WordObject {
    // return this._data[~~(Math.random() * this._data.length)]
    const jlpt = ~~(Math.random() * 1)
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

  async speakEnglishTranslation () {
    // const e = 'to hang up (e.g. a coat, a picture on the wall), to let hang, to suspend (from), to hoist (e.g. sail), to raise (e.g. flag)//to put on (e.g. a blanket), to put on top of, to cover, to lay, to spread//to put on (glasses, etc.), to wear (a necklace, etc.)//to make (a call)//to spend (time, money), to expend, to use//to pour (liquid) onto, to sprinkle (powder or spices) onto, to splash, to throw (e.g. water) onto//to turn on (an engine, radio, etc.), to set (a dial, alarm clock, etc.), to put on (a DVD, song, etc.), to use (a device, implement, etc.)//to cause (someone inconvenience, trouble, etc.), to burden (someone), to impose//to multiply (arithmetic operation)//to secure (e.g. lock)//to take a seat, to sit, to rest (something on something else), to support (something on something else)//to bind//to wager, to bet, to risk, to stake, to gamble//to put an effect (spell, anaesthetic, etc.) on//to hold (a play, festival, etc.)//to hold an emotion for (pity, hope, etc.)//to argue (in court), to deliberate (in a meeting), to present (e.g. idea to a conference, etc.)//to increase further//to catch (in a trap, etc.)//to set atop//to erect (a makeshift building)//to apply (insurance)//to pun (on a word), to use (a word) as a pivot word, to play on words//to be partway doing ..., to begin (but not complete) ..., to be about to ...//to address (someone), to direct (something, to someone), to do (something, to someone)'
    let english = this.word.english.split('//').filter(s=>s!=='-').map(sense=>{
      return sense.replace(/\(.*\)/g, '').split(',').map(m=>m.trim())
    })
    // @ts-ignore
    english = [...new Set(interleave(...english))]

    console.log(english.slice(0, 5).join('. '))

    try {
      await speak(english.slice(0, 5).join('. '))
    } catch (e) {
      throw e
    }
  }
}
