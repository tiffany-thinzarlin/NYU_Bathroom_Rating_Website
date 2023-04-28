describe("FilterNameReview component", () => {
  it("filters reviews by bathroom name", () => {
    // Visit the page where the component is mounted
    cy.visit("http://localhost:3000/filterNameReview");

    // Type a bathroom name in the input field
    cy.get("#bathroom").type("6Metro1Flr");

    // Click the filter button
    cy.contains("button", "Filter").click();

    // Assert that reviews with the specified bathroom name are displayed
    cy.get("table tbody tr")
      .should("have.length", 1)
      .contains("td", "6Metro1Flr");
  });

  it("displays 'No reviews to display' message when no reviews match the filter", () => {
    // Visit the page where the component is mounted
    cy.visit("http://localhost:3000/filterNameReview");

    // Type a non-existent bathroom name in the input field
    cy.get("#bathroom").type("Non-existent Bathroom");

    // Click the filter button
    cy.contains("button", "Filter").click();

    // Assert that the 'No reviews to display' message is shown
    cy.contains("p", "No reviews to display");
  });
});
