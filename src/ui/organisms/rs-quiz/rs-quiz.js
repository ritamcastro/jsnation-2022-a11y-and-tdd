import "../../molecules/text-input/text-input"

class ReactSummitQuiz extends HTMLElement {

  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
        <fieldset id="going-to-rs" name="Going to React Summit?">
          <legend>Will you also attend React Summit?</legend>

          <input type="checkbox" id="yes" name="going-to-rs" />
          <label for="yes">Yes, of course!</label>

          <input type="checkbox" id="also-yes" name="going-to-rs" />
          <label for="also-yes">Wouldn't miss it!</label><br />
        </fieldset>
        `
  }
}

window.customElements.define("rs-quiz", ReactSummitQuiz)
