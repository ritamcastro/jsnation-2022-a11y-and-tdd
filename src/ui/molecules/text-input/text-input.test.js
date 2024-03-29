import { screen } from "@testing-library/dom"
import "./text-input"

describe("text-input module", () => {

  it("has a label and is a controlled input", () => {
    document.body.innerHTML = `
        <text-input labelText="Some random label" name="text" value="Awesome"></text-input>
      `
    expect(screen.getByLabelText("Some random label")).toBeInTheDocument()

    const input = screen.getByRole("textbox", { name: "Some random label" })
    expect(input).toHaveValue("Awesome")
    expect(input).toHaveAttribute("name", "text")
  })

  it("can also be an email input", () => {
    document.body.innerHTML = `
      <text-input type="email" labelText="An email" name="email" value="lera@gitnation.org"></text-input>
    `

    const input = screen.getByRole("textbox", { name: "An email" })
    expect(input).toHaveProperty("type", "email")
  })
})
