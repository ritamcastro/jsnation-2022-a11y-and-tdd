
describe("Filling out Lera's form", () => {
    it("we got this!", () => {
        // We open the page
        cy.visit("")

        // In the page, we find the section of the Personal Details
        cy.findByRole("group", { name: "Personal details" })
        // We click "Enter your name" and...
        cy.findByLabelText("Enter your name:")
            .click()
            // ... we start typing on the input
            .type("Rita")
            // We press tab to go for the "surname" field
            .tab()
            .type("Castro")
            // ... and we keep tab'ing until we have filled the entire form
            .tab()
            .type("me@ritamcastro.com")
            .tab()
            .type(" ")
            .tab()
            .tab()
            .tab()
            .type(" ")
            .tab()
            .select("Boat")

        // We look for the button with the text "Send it to Lera"...
        cy.findByRole("button", { name: "Send it to Lera!" })
            // ... and we click it!
            .click()
        // The End 🙂
    })
})
