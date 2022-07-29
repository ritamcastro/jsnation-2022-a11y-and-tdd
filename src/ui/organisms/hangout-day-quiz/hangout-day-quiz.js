import "../../molecules/text-input/text-input"

class HangoutDayQuiz extends HTMLElement {

  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
      <fieldset name="hangout-day">
        <legend>Hangout Day</legend>

        <fieldset name="going-to-hangout-day">
          <legend>Are you going?</legend>

          <div>
            <input type="radio" id="yup" name="drone" value="yup" />
            <label for="yup">Yes, of course!</label>
          </div>

          <div>
            <input type="radio" id="nope" name="drone" value="nope" />
            <label for="nope">I can't :(</label>
          </div>
        </fieldset>

        <label for="hangout-day">How are you spending it?</label>

        <select name="fun-happens-at" id="hangout-day">
          <option value="">--Please choose an option--</option>
          <option value="boat">Boat</option>
          <option value="walk">Walk tours</option>
        </select>
    </fieldset>
    `
  }
}

window.customElements.define("hangout-day-quiz", HangoutDayQuiz)
