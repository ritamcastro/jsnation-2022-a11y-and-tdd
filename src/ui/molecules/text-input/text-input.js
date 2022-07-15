class TextInput extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
            <p>Hi, welcome</p>
            <input/>
        `
    }
}

window.customElements.define("text-input", TextInput)
