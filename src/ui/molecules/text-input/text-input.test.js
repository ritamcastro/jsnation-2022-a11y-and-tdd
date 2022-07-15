import { screen } from "@testing-library/dom"
import "./text-input"

describe("text-input module", () => {

    it("has a custom title and is a controlled input", () => {
        document.body.innerHTML = `<text-input title="Some random title" value="Awesome"></text-input>`

        expect(document.body.querySelector("p")).toHaveTextContent("Some random title")
        expect(document.body.querySelector("input")).toHaveValue("Awesome")
    })
})
