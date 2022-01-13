describe('cy-radio', () => {
  beforeEach(() => cy.visit('./index.html'))

  it('wrongly checks the last radio button', () => {
    cy.get('input[type="radio"]')
      .last()
      .check()
  })

  it('correctly checks the last radio button', () => {
    cy.get('input[type="radio"]')
      .should('have.length', 3)
      .last()
      .check()
  })
})
