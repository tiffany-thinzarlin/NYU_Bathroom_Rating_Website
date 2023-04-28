describe("Reviews Component", () => {
  it("renders table and table header", () => {
    cy.visit("http://localhost:3000/reviews");

    cy.get("h1").should("have.text", "Reviews");

    cy.get("table").should("exist");

    cy.get("thead tr th").should("have.length", 3);
    cy.get("thead tr th").eq(0).should("have.text", "Bathroom");
    cy.get("thead tr th").eq(1).should("have.text", "Rating");
    cy.get("thead tr th").eq(2).should("have.text", "Review");
  });
});
