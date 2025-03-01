const { Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');

Given('I visit the website', () => {
    cy.visit('http://zero.webappsecurity.com/index.html')
})

When('I typed something to search for', () => {
    cy.get('#searchTerm').type('online {enter}')
})

Then('I should see search result page', () => {
    cy.get('h2').should('contain', 'Search Results:')
    cy.get(':nth-child(4) > :nth-child(1) > a').should('contain', 'Zero - Free Access to Online Banking')
    cy.get(':nth-child(4) > :nth-child(2)').should('contain', 'Zero - Online Statements')
    cy.get(':nth-child(4) > :nth-child(1) > a').click()
    cy.url().should('include', 'online-banking.html')
})