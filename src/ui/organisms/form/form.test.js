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

    it("populates data and sends it", async () => {
        const sendItFn = jest.fn()
        document.body.innerHTML = "<jsnation-form></jsnation-form>"
        const form = document.body.querySelector("jsnation-form")
        form.addEventListener("onSubmit", sendItFn)

        const firstNameInput = screen.getByLabelText("Enter your name:")
        userEvent.click(firstNameInput)

        await userEvent.type(firstNameInput, "Rita")
        expect(firstNameInput).toHaveValue("Rita")

        userEvent.tab()
        expect(screen.getByLabelText("Enter your surname:")).toHaveFocus()

        const lastNameInput = screen.getByRole("textbox", { name: "Enter your surname:" })
        await userEvent.type(lastNameInput, "Castro")

        expect(lastNameInput).toHaveValue("Castro")

        await userEvent.click(screen.getByRole("button"))
        expect(sendItFn).toHaveBeenCalledWith(
            new CustomEvent({ detail: { firstName: "Rita", lastName: "Castro" } })
        )
    })
})
