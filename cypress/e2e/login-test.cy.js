import {errorMessages} from "../../src/components/Login"

describe('LoginE2ETest', () => {
  beforeEach(() => {
          //Arrange
    cy.visit('http://localhost:5173/')

  })
  describe('LoginSuccesfull', () => {
    it('passes', () => {
      //Act
      cy.get('[data-cy="email-input"]').type("erdem.guntay@wit.com.tr")
      cy.get('[data-cy="password-input"]').type("9fxIH0GXesEwH_I")
      cy.get('[data-cy="terms-input"]').click()
      //Assert
      cy.get('[data-cy="submit-button"]').should("be.enabled")
      cy.visit('http://localhost:5173/success')
    })
  })
  describe('emailTest', () => {
    it('passes', () => {
      //Act
      cy.get('[data-cy="email-input"]').type("eecom")
      //Assert
      cy.contains(errorMessages.email)
      cy.get('[data-cy="error-message-email"]').should('have.length',1);
    })
    })
    describe('emailpasswordTest', () => {
      it('passes', () => {

        //Act
        cy.get('[data-cy="email-input"]').type("ee@wit")
        cy.get('[data-cy="password-input"]').type("ee")
        //Assert
        cy.contains(errorMessages.email)
        cy.contains(errorMessages.password)
        cy.get('[data-cy="error-message-email"]').should('have.length',1);
        cy.get('[data-cy="error-message-password"]').should('have.length',1);
      })
      })
      describe('termsTest', () => {
        it('passes', () => {
          //Act
          cy.get('[data-cy="email-input"]').type("erdem.guntay@wit.com.tr")
          cy.get('[data-cy="password-input"]').type("9fxIH0GXesEwH_I")
          //Assert
          cy.get('[data-cy="submit-button"]').should("be.not.enabled")
        })
        })
  })

