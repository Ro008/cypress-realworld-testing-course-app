describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  context('hero section', () => {
    it('the h1 contains the correct text', () => {
      cy.getByData('hero-heading').contains('Testing Next.js Applications with Cypress');
    })

    it('the features on the homepage are correct', () => {
      cy.get('dt').eq(0).contains('4 Courses');
      cy.get('dt').eq(1).contains('25+ Lessons');
    })
  })

  context('courses section', () => {
    it('course: Testing Your First Next.js Application', () => {
      cy.getByData('course-0').find('a').eq(3).click();
      cy.location('pathname').should('eq', '/testing-your-first-application')
    })

    it('course: Testing Foundations', () => {
      cy.getByData('course-1').find('a').eq(3).click();
      cy.location('pathname').should('eq', '/testing-foundations')
    })    

    it('course: Cypress Fundamentals', () => {
      cy.getByData('course-2').find('a').eq(3).click();
      cy.location('pathname').should('eq', '/cypress-fundamentals')
    })

  })

})