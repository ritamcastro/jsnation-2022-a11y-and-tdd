import { screen } from "@testing-library/dom"
import "./personal-details"

describe("personal-details organism", () => {

    it("groups several <text-input/>'s in an organism", () => {
        document.body.innerHTML = `<personal-details></personal-details>`

        expect(screen.getByRole("group", { name: "Personal details" })).toBeInTheDocument()

        expect(screen.getByLabelText("Enter your name:")).toBeInTheDocument()
        expect(screen.getByLabelText("Enter your surname:")).toBeInTheDocument()
        expect(screen.getByLabelText("Enter your email:")).toBeInTheDocument()
    })
})
