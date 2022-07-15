class TextInput extends HTMLElement {
    constructor() {
        super()
        this.value = this.getAttribute("value")
    }

    connectedCallback() {
        this.innerHTML = `
            <p>${this.title}</p>
            <input value=${this.value}></input>
        `
    }
}

window.customElements.define("text-input", TextInput)
