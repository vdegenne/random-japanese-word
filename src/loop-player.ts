import { html, LitElement, PropertyValueMap } from 'lit'
import { customElement, query, state } from 'lit/decorators.js'
import '@material/mwc-dialog'
import '@material/mwc-icon-button'
import '@material/mwc-slider'
import { Dialog } from '@material/mwc-dialog';
import { sleep } from './util'

@customElement('loop-player')
export class LoopPlayer extends LitElement {
  @query('mwc-dialog') dialog!: Dialog;

  @state() private pauseBeforeAnswer = 10
  @state() private pauseBeforeNextWord = 10
  @state() private running = false

  private _pauseBeforeAnswerTimeout?: NodeJS.Timeout;
  private _pauseBeforeNextWordTimeout?: NodeJS.Timeout;

  render() {
    return html`
    <mwc-icon-button icon=${this.running ? 'stop' : 'all_inclusive'} style="color:white"
      @click=${()=>{this.running ? this.stop() : this.open()}}></mwc-icon-button>

    <mwc-dialog heading="Loop Options" style="--mdc-dialog-min-width:calc(100vw - 32px)">

      <!-- sep -->
      <!-- <div style="height:30px"></div> -->

      <p>Wait ${this.pauseBeforeAnswer}s before answer</p>
      <mwc-slider
        discrete
        withTickMarks
        value=${this.pauseBeforeAnswer}
        step=1
        min=2
        max=20
        @change=${e=>{this.pauseBeforeAnswer=e.detail.value}}
      ></mwc-slider>

      <p>Wait ${this.pauseBeforeNextWord}s before answer</p>
      <mwc-slider
        discrete
        withTickMarks
        value=${this.pauseBeforeNextWord}
        step=1
        min=2
        max=50
        @change=${e=>{this.pauseBeforeNextWord=e.detail.value}}
      ></mwc-slider>

      <mwc-button outlined slot="secondaryAction" dialogAction="close">close</mwc-button>
      <mwc-button unelevated slot="primaryAction"
        @click=${e=>{this.start()}}>start</mwc-button>
    </mwc-dialog>
    `
  }

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    this.dialog.addEventListener('opened', ()=>{
      this.shadowRoot!.querySelectorAll('mwc-slider').forEach(e=>e.layout())
    })
  }

  open () {
    this.dialog.show()
  }

  async start () {
    this.running = true
    this.dialog.close()
    await sleep(2000)
    this.pauseBeforeNextWordTimeoutEndHandler()
  }

  // execNextProcess () {
  //   // The "loop" just got started, we pick a word and waits the answer
  //   if (this._pauseBeforeAnswerTimeout && this._pauseBeforeNextWordTimeout) {
  //     this.pauseBeforeNextWordTimeoutEndHandler()
  //     window.app.pickNewWord()
  //   }
  // }


  async pauseBeforeAnswerTimeoutEndHandler () {
    try {
      await window.app.speakEnglishTranslation()
      // console.log('next')
    } catch (e) {
      console.log('Something went wrong with the speech synthesis. aborting')
      return
    }
    if (this.running == false) {
      return
    }
    // the translation was spoken and finished we wait the new word again
    this._pauseBeforeNextWordTimeout = setTimeout(
      ()=>this.pauseBeforeNextWordTimeoutEndHandler(),
      this.pauseBeforeNextWord * 1000
    )
  }
  async pauseBeforeNextWordTimeoutEndHandler () {
    // pickNewWord also play the picked up word
    // we await the audio to end
    try {
      await window.app.pickNewWord()
    } catch (e) {
      // @TODO no sound, passing ?
      // console.log('no sound passing !')
      this.pauseBeforeNextWordTimeoutEndHandler()
      return
    }
    // new word was loaded and the audio played
    // we wait for the answer
    if (this.running == false) {
      return
    }
    this._pauseBeforeAnswerTimeout = setTimeout(
      ()=>this.pauseBeforeAnswerTimeoutEndHandler(),
      this.pauseBeforeAnswer * 1000
    )
  }

  clearPauseBeforeAnswerTimeout () {
    if (this._pauseBeforeAnswerTimeout) {
      clearTimeout(this._pauseBeforeAnswerTimeout)
      this._pauseBeforeAnswerTimeout = undefined
    }
  }
  clearPauseBeforeNextWordTimeout () {
    if (this._pauseBeforeNextWordTimeout) {
      clearTimeout(this._pauseBeforeNextWordTimeout)
      this._pauseBeforeNextWordTimeout = undefined
    }
  }

  stop () {
    this.clearPauseBeforeAnswerTimeout()
    this.clearPauseBeforeNextWordTimeout()
    this.running = false
  }
}