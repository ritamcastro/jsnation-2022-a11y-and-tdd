class TextInput extends HTMLElement {

    constructor() {
        super()
        this.value = this.getAttribute("value")
        this.labelText = this.getAttribute("labelText")
        this.name = this.getAttribute("name")
    }

    connectedCallback() {
        this.innerHTML = `
          <label for="${this.name}">
            ${this.labelText}
          </label>
          <input id="${this.name}" name="${this.name}" value=${this.value}></input>
       `
    }
}

window.customElements.define("text-input", TextInput)
