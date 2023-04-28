describe("MainPage", () => {
  it("renders the NYU Bathroom Rating Website homepage", () => {
    cy.visit("http://localhost:3000");
    cy.get("header h1").contains("Welcome to the NYU Bathroom Rating Website");
    cy.get("img").should("be.visible");
  });
});
