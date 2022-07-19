import { screen } from "@testing-library/dom"
import userEvent from "@testing-library/user-event"
import "./form"

describe("form organism", () => {
    it("asks for first name and last name and sends it", () => {
        document.body.innerHTML = "<jsnation-form></jsnation-form>"
        const form = document.body.querySelector("jsnation-form")

        // On accessing the form via its role, take a look at this:
        // https://github.com/testing-library/dom-testing-library/issues/937
        expect(screen.getByRole("form", { name: "JS Nation asks stuff form" })).toBeInTheDocument()

        expect(screen.getByLabelText("Enter your surname:")).toBeInTheDocument()
        expect(screen.getByLabelText("Enter your name:")).toBeInTheDocument()

        const sendItButton = screen.getByRole("button")
        expect(sendItButton).toHaveValue("Send it to Lera!")
    })
})
