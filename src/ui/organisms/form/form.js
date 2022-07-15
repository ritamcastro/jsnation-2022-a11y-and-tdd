import "../../molecules/text-input/text-input"

class JsNationForm extends HTMLElement {

    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
            <text-input title="First Name"></text-input>
            <text-input title="Last Name"></text-input>

            <button>Send it to Lera!</button>
        `
    }
}

window.customElements.define("jsnation-form", JsNationForm)
