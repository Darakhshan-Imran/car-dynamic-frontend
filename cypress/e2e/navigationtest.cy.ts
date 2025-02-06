describe('Navigation Flow Tests', () => {
  beforeEach(() => {
    cy.visit('/', { timeout: 10000 })
  })

  it('should navigate through all pages in the expected flow', () => {
    // 1. Verify home page loaded
    cy.get('#home-page', { timeout: 10000 })
      .should('exist')

    // 2. Click Show More Cars button to go to product page
    cy.get('#show-more-button', { timeout: 10000 })
      .click()
    cy.url().should('include', '/product')

    // 3. Click first Rent Now button to go to car detail page
    cy.get('button.bg-blue-500 a', { timeout: 10000 })
      .first()
      .click()
    cy.url().should('match', /\/car_detail\/\d+/)
    cy.get('#car-detail-page').should('exist')

    // 4. Click Rent Now on detail page to go to booking form
    cy.get('a[href="/booking_form"]', { timeout: 10000 })
      .click()
    cy.url().should('include', '/booking_form')
    cy.get('#rental-form-container').should('exist')
  })

  it('should navigate directly to car detail page and then booking form', () => {
    // 1. Click first Rent Now button on home page
    cy.get('#rent-now', { timeout: 10000 })
      .first()
      .click()
    cy.get('#car-detail-page').should('exist')

    // 2. Navigate to booking form
    cy.get('a[href="/booking_form"]', { timeout: 10000 })
      .click()
    cy.get('#rental-form-container').should('exist')
  })

  it('should handle invalid navigation attempts', () => {
    // Test invalid car detail page
    cy.visit('/car_detail/invalid', { failOnStatusCode: false })
    cy.get('[data-cy="error-message"]').should('exist')

    // Test direct booking form access
    cy.visit('/booking_form', { failOnStatusCode: false })
    cy.get('[data-cy="redirect-message"]').should('exist')
  })
})