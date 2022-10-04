/// <reference type="cypress" />

describe('Formik test', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should not go on the next page after click if has not chosen fields', () => {
        cy.get("[data-cy='next-q']").should('be.disabled')
    })

    it('should go to the next page after choosing fruits', () => {
        cy.get("[data-cy='first-label']").click()
        cy.get("[data-cy='next-q']").click()

        cy.get("[data-cy='second-label']").should('be.visible')
        cy.contains("Submit").should('be.visible').and('be.disabled')
    })

    it('should show proper fruit and anime', () => {
        cy.get("[data-cy='first-label']").click()
        cy.get("[data-cy='next-q']").click()
        cy.get("[data-cy='second-label']").click()

        cy.contains("Submit").click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Ты любишь кушать Banana и смотреть аниме Naruto')
        })
    })
    it('should show proper all fruits and anime', () => {
        cy.get("[data-cy='first-label']").click()
        cy.get("[data-cy='first-label-pear']").click()
        cy.get("[data-cy='first-label-pineapple']").click()
        cy.get("[data-cy='first-label-apple']").click()
        cy.get("[data-cy='next-q']").click()
        cy.get("[data-cy='second-label']").click()

        cy.contains("Submit").click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Ты любишь кушать Banana, Pear, Pineapple, Apple и смотреть аниме Naruto to equal Ты любишь кушать Banana и смотреть аниме Naruto')
        })
    })
})