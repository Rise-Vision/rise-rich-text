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
    this._sendRichTextEvent( RiseRichText.EVENT_DATA_UPDATE, {newValue, oldValue});
  }

  _richTextIsSet() {
    return typeof this.richText !== "undefined"
  }

  _refresh() {
    this.shadowRoot.innerHTML = this.richText;
  }

  _sendRichTextEvent( eventName, detail ) {
    super._sendEvent( eventName, detail );

    switch ( eventName ) {
      case RiseRichText.EVENT_DATA_ERROR:
        super._setUptimeError( true );
        break;
      case RiseRichText.EVENT_DATA_UPDATE:
        super._setUptimeError( false );
        break;
      default:
    }
  }
}

customElements.define("rise-rich-text", RiseRichText);
