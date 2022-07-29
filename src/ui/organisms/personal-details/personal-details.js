import "../../molecules/text-input/text-input"

class PersonalDetails extends HTMLElement {

    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
        <fieldset>
            <legend>Personal details</legend>

            <text-input labelText="Enter your name:" name="firstName" value=""></text-input>
            <text-input labelText="Enter your surname:" name="lastName" value=""></text-input>
            <text-input type="email" labelText="Enter your email:" name="email" value=""></text-input>
        </fieldset>
      `
    }
}

window.customElements.define("personal-details", PersonalDetails)
