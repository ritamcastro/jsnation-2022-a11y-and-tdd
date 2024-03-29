import "../personal-details/personal-details"
import "../rs-quiz/rs-quiz"
import "../hangout-day-quiz/hangout-day-quiz"

class JsNationForm extends HTMLElement {

    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
        <form aria-label="JS Nation asks stuff form">

            <personal-details></personal-details>
            <rs-quiz></rs-quiz>
            <hangout-day-quiz></hangout-day-quiz>

            <input type="submit" value="Send it to Lera!" />
        </form>
        `

        // Submitting the data
        const form = this.querySelector("form")
        form.addEventListener("submit", (event) => {
            event.preventDefault()

            // https://developer.mozilla.org/en-US/docs/Web/API/FormData
            // This piece of code gets all the form values forms into an object 👇
            // const formValues = Array.from(formData.entries())
            //   .reduce((acc, [key, value]) => ({...acc, [key]: value}), {})
            // console.log(formValues)
            // eg.:
            // {
            //   "firstName": "Hey",
            //   "lastName": "you",
            // }

            const formData = new FormData(this.querySelector("form"))
            const personalData = {
                firstName: formData.get("firstName"),
                lastName: formData.get("lastName"),
            }

            window.alert()
            this.dispatchEvent(
                new CustomEvent("onSubmit", { detail: { personalData } }),
            )
        })
    }
}

window.customElements.define("jsnation-form", JsNationForm)
