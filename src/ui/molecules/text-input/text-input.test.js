import { screen } from "@testing-library/dom"
import "./text-input"

describe("text-input module", () => {

    it("has the title and the input box", () => {
        document.body.innerHTML = `<text-input></text-input>`

        expect(document.body.querySelector("p")).toHaveTextContent("Hi, welcome")

        expect(document.body.querySelector("input")).toBeInTheDocument()
    })
})
