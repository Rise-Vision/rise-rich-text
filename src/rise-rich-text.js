import { html } from "@polymer/polymer";
import { RiseElement } from "rise-common-component/src/rise-element.js";
import { version } from "./rise-rich-text-version.js";

export default class RiseRichText extends RiseElement {

  static get template() {
    return html``;
  }

  static get properties() {
    return {
      richtext: {
        type: String,
        observer: "_richTextChanged"
      },
      googlefonts: {
        type: Array,
        observer: "_googleFontsChanged"
      }
    };
  }

  constructor() {
    super();

    this._setVersion( version );

    //create empty link element so it can be re-used when googlefonts change
    this.googleFontsLink = document.createElement("link");
    this.googleFontsLink.rel  = "stylesheet";
    this.googleFontsLink.type = "text/css";
    document.head.appendChild(this.googleFontsLink);
  }

  _richTextChanged(newValue, oldValue) {
    this._refresh();
    super._sendEvent( RiseRichText.EVENT_DATA_UPDATE, {newValue, oldValue});
  }

  _googleFontsChanged() {
    if (this.googlefonts && this.googlefonts.length) {
      const googleFontsUrl = "https://fonts.googleapis.com/css2?display=swap&family=" + encodeURI(this.googlefonts.join("&family="));

      // Check if URL has changed becase _googleFontsChanged is triggered every time when 
      // googlefonts or richtext properties change. It causes unecessary blinking in Editor preview.
      // Using observer that monitors array mutations https://polymer-library.polymer-project.org/3.0/docs/devguide/observers#array-observation
      // does not fully solve the problem because changeRecord parameter is unreliable.
      if (googleFontsUrl !== this.googleFontsLink.href) {
        this._setGoogleFontsLinkHref(googleFontsUrl);
      }
    }
  }

  _setGoogleFontsLinkHref(value) {
    this.googleFontsLink.href =  value;
  }

  _refresh() {
    this.shadowRoot.innerHTML = this.richtext;
  }
}

customElements.define("rise-rich-text", RiseRichText);
