import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'
import '@material/mwc-snackbar'
import '@material/mwc-button'
// import '@material/mwc-icon-button'
// import '@material/mwc-dialog'
// import '@material/mwc-textfield'
// import '@material/mwc-checkbox'
import data from '../docs/data/data.json'
import { Word } from './types'

declare global {
  interface Window {
    app: AppContainer;
    toast: (labelText: string, timeoutMs?: number) => void;
  }
}

@customElement('app-container')
export class AppContainer extends LitElement {

  private _data: Word[] = [];

  constructor () {
    super()
    this.prepareData()
  }

  static styles = css`
  :host {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    font-family: 'Zen Old Mincho', serif;
  }
  `
  render () {
    const random = this._data[~~(Math.random() * this._data.length)]

    return html`
    <div style="font-size:4em;"
      @click=${_=>this.requestUpdate()}>${random.lemma}</div>
    `
  }

  prepareData () {
    this._data = data.filter(word => word.lemma.length > 2)
  }
}
