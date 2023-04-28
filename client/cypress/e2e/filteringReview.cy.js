describe("Filtering reviews", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/filterReview");
  });

  it("should display filtered reviews when filter form is submitted", () => {
    cy.get("#minRating").type("1");
    cy.get("#maxRating").type("3");
    cy.get("form").submit();

    //cy.get("table tbody tr").should("have.length", 2);
    /* cy.get("table tbody tr").each(($el, index) => {
      if (index === 0) {
        cy.wrap($el).find("td").eq(1).should("contain.text", ["1", "2", "3"]);
      } else if (index === 1) {
        cy.wrap($el).find("td").eq(1).should("contain.text", ["1", "2", "3"]);
      }
    });*/
    cy.get("table tbody tr").each(($el, index) => {
      cy.wrap($el)
        .find("td")
        .eq(1)
        .invoke("text")
        .then((text) => {
          expect(text).to.match(/^(1|2|3)$/);
        });
    });
  });
  it("should display all reviews", () => {
    cy.get("#minRating").type("1");
    cy.get("#maxRating").type("5");
    cy.get("form").submit();

    //cy.get("table tbody tr").should("have.length", 2);
    /* cy.get("table tbody tr").each(($el, index) => {
      if (index === 0) {
        cy.wrap($el).find("td").eq(1).should("contain.text", ["1", "2", "3"]);
      } else if (index === 1) {
        cy.wrap($el).find("td").eq(1).should("contain.text", ["1", "2", "3"]);
      }
    });*/
    cy.get("table tbody tr").each(($el, index) => {
      cy.wrap($el)
        .find("td")
        .eq(1)
        .invoke("text")
        .then((text) => {
          expect(text).to.match(/^(1|2|3|4|5)$/);
        });
    });
  });
  /*
  it("should display all reviews when filter is cleared", () => {
    cy.get("#minRating").type("1");
    cy.get("#maxRating").type("3");
    cy.get("form").submit();

    //cy.get("table tbody tr").should("have.length", 2);

    cy.get("#clearFilter").click();

    cy.get("table tbody tr").should("have.length", 4);
    cy.get("table tbody tr").each(($el, index) => {
      if (index === 0) {
        cy.wrap($el).find("td").eq(1).should("contain.text", "5");
      } else if (index === 1) {
        cy.wrap($el).find("td").eq(1).should("contain.text", "2");
      } else if (index === 2) {
        cy.wrap($el).find("td").eq(1).should("contain.text", "3");
      } else if (index === 3) {
        cy.wrap($el).find("td").eq(1).should("contain.text", "4");
      }
    });
  });*/
});
