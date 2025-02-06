describe("Product Page", () => {
  beforeEach(() => {
    cy.visit("/product"); // Correct path for the product page
  });

  it("should render the product page correctly", () => {
    cy.get("#home-page").should("exist");
    cy.get("#main-content").should("exist");
    cy.get("#main-section").should("exist");
  });

  it("should render location selectors", () => {
    cy.get("#location-selector").should("exist");
    cy.get("#location-selector").within(() => {
      cy.contains("Pick — Up").should("exist");
      cy.contains("Drop — Off").should("exist");
    });
  });

  it("should render the swap button", () => {
    cy.get("#swap-button").should("exist").click();
  });

  it("should render recent cars section", () => {
    cy.get("#recent-cars-section").should("exist");
    cy.get("#recent-cars-section").within(() => {
      cy.contains("Recent Cars").should("exist");
    });
  });

  it("should ensure recommended cars component loads", () => {
    cy.get("#recent-cars-section").within(() => {
      cy.get("div").should("exist");
    });
  });
});
