describe("Test e2e", () => {

     beforeEach(() => {
       // Visita la página de inicio configurada en baseUrl
       cy.visit("http://localhost:4173/");
     });


    it("should visit the home page", () => {
        cy.visit("/");
        cy.contains("h3", "You’ve successfully created a project with");
    })       
});