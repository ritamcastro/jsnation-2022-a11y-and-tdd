import { screen } from "@testing-library/dom"
import userEvent from "@testing-library/user-event"
import "./form"

describe("form organism", () => {
    it("asks for first name and last name", () => {
        document.body.innerHTML = "<jsnation-form></jsnation-form>"

        expect(screen.getByText("Last Name")).toBeInTheDocument()
        expect(screen.getByText("First Name")).toBeInTheDocument()

        expect(screen.getByRole("button", { name: "Send it to Lera!" })).toBeInTheDocument()
    })
})
