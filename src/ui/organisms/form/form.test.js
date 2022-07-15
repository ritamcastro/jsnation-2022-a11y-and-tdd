import "./form"

describe("form organism", () => {
    it("asks for first name and last name", () => {
        document.body.innerHTML = `<jsnation-form></jsnation-form>`

        expect(document.body.querySelector("p")).toHaveTextContent("First Name")
        expect(document.body.querySelector("p")).toHaveTextContent("Last Name")

        expect(document.body.querySelector("button")).toHaveTextContent("Send it to Lera!")
    })


})
