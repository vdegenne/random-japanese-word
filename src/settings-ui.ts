import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators';

@customElement('settings-ui')
export class SettingsUI extends LitElement {
  render() {
    return html`
    <mwc-dialog heading=Settings>

    </mwc-dialog>
    `
  }
}