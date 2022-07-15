import "./form"

describe("form organism", () => {
    it("asks for first name and last name", () => {
        document.body.innerHTML = `<jsnation-form></jsnation-form>`

        expect(document.body.querySelectorAll("p")[0]).toHaveTextContent("First Name")
        expect(document.body.querySelectorAll("p")[1]).toHaveTextContent("Last Name")

        expect(document.body.querySelector("button")).toHaveTextContent("Send it to Lera!")
    })


})
