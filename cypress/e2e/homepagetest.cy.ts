/// <reference types="cypress" />

describe('Home Page Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render the home page', () => {
    cy.get('#home-page').should('exist');
  });

  it('should render location selector', () => {
    cy.get('#location-selector').should('exist');
  });

  it('should have a swap button', () => {
    cy.get('#swap-button').should('exist').and('be.visible');
  });

  it('should render the Hero section', () => {
    cy.get('#hero-section').should('exist');
  });

  it('should render Popular Cars section', () => {
    cy.get('#popular-cars').should('exist');
  });

  it('should render Recommended Cars section', () => {
    cy.get('#recommended-cars').should('exist');
  });

  it('should navigate to products page when Show More Cars button is clicked', () => {
    cy.get('#show-more-button').click();
    cy.url().should('include', '/product');
  });
});
