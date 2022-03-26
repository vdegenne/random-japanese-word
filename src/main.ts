import { LitElement, html, css } from 'lit'
import { customElement, query, state } from 'lit/decorators.js'
import '@material/mwc-snackbar'
import '@material/mwc-button'
import '@material/mwc-icon-button'
// import '@material/mwc-dialog'
// import '@material/mwc-textfield'
// import '@material/mwc-checkbox'
import data from '../docs/data/data.json'
import { Word } from './types'
import { jishoSearch } from './util'
import { Button } from '@material/mwc-button'

declare global {
  interface Window {
    app: AppContainer;
    toast: (labelText: string, timeoutMs?: number) => void;
  }
}

@customElement('app-container')
export class AppContainer extends LitElement {
  private _data: Word[] = [];

  @state() word!: Word;

  private _excludes: string[] = []

  @query('mwc-icon-button[icon=menu_book]') jishoButton!: Button;
  @query('mwc-icon-button[icon=casino]') randomButton!: Button;

  constructor () {
    super()
    this.prepareData()
    this.pickNewWord()

    this._excludes = localStorage.getItem('random-japanese-word:excludes') ? JSON.parse(localStorage.getItem('random-japanese-word:excludes')!.toString()) : [];

    window.addEventListener('keypress', (e) => {
      console.log(e)
      if (e.key === 's') {
        this.jishoButton.click()
      }
      if (e.key === 'r') {
        this.randomButton.click()
      }
    })
  }

  static styles = css`
  :host {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    font-family: 'Zen Old Mincho', serif;
  }
  #word {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4em;
    flex:1;
  }
  [controls] {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding:12px;
    box-sizing: border-box;
  }
  `
  render () {

    return html`
    <div id=word>${this.word.lemma}</div>

    <div controls>
      <!-- <div> -->
        <mwc-icon-button icon=menu_book style="color:#4caf50"
          @click=${() => { jishoSearch(this.word.lemma) }}></mwc-icon-button>
        <mwc-icon-button icon=delete style="color:#e53935"
          @click=${_=>{this.addToExcludes(this.word.lemma)}}></mwc-icon-button>
      <!-- </div> -->
      <mwc-icon-button icon=casino
        @click=${_=>this.pickNewWord()}></mwc-icon-button>
    </div>
    `
  }

  prepareData () {
    this._data = data.filter(word => word.lemma.length > 2)
  }

  pickNewWord() {
    this.word = this.getNewWord()

    ;(new Audio(`https://assiets.vdegenne.com/data/japanese/audio/${this.word.lemma}`)).play()
  }

  getNewWord () {
    return this._data[~~(Math.random() * this._data.length)]
  }

  addToExcludes (word) {
    this._excludes = [...new Set([...this._excludes, word])]
    localStorage.setItem('random-japanese-word:excludes', JSON.stringify(this._excludes))
    this.pickNewWord()
  }
}
