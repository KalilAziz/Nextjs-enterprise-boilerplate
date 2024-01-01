describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('passes', () => {
    cy.get('h2').should('contain', 'Templates')
  })
})
