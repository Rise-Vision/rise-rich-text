import { html } from "@polymer/polymer";
import { RiseElement } from "rise-common-component/src/rise-element.js";
import { version } from "./rise-rich-text-version.js";

export default class RiseRichText extends RiseElement {

  static get template() {
    return html``;
  }

  static get properties() {
    return {
      richText: {
        type: String,
        observer: "_richTextChanged"
      }
    };
  }

  constructor() {
    super();

    this._setVersion( version );
    this.validFont = false;
  }

  _richTextChanged(newValue, oldValue) {
    this._refresh();
    super._sendEvent( RiseRichText.EVENT_DATA_UPDATE, {newValue, oldValue});
  }

  _refresh() {
    this.shadowRoot.innerHTML = this.richText;
  }
}

customElements.define("rise-rich-text", RiseRichText);
