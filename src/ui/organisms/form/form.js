import "../../molecules/text-input/text-input"

class JsNationForm extends HTMLElement {

    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
        <form aria-label="JS Nation asks stuff form">

            <text-input labelText="Enter your name:" name="firstName" value=""></text-input>
            <text-input labelText="Enter your surname:" name="lastName" value=""></text-input>

            <input type="submit" value="Send it to Lera!" />
        </form>
        `
    }
}

window.customElements.define("jsnation-form", JsNationForm)
