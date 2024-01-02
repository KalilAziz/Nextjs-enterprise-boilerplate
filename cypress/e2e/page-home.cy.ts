describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should be able to render home page', () => {
    cy.get('h2').should('contain', 'Next.js')
  })
})
