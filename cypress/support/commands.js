// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.on('uncaught:exception', (err, runnable) => {

  // returning false here prevents Cypress from failing the test

  return false

})

Cypress.Commands.add('login', (email, password) => {

  cy.get('._1_3w1N').click();
  cy.get(':nth-child(1) > ._2IX_2-').type('9704008462');
  cy.get('input[type="password"]').type('dhwija@11');
  cy.get('[type="submit"]:nth-child(1)').click();


})



Cypress.Commands.add('register', (details) => {

  cy.get("a[href='register.php']").click()
  cy.get('#user_title').select('Miss').should('have.value', 'Miss')
  cy.get('#user_firstname').type('Priya')
  cy.get('#user_surname').type('kolli')
  cy.get('#user_phone').type('9090909090')
  cy.get('#user_dateofbirth_1i').select('1993')
  cy.get('#user_dateofbirth_2i').select('March')
  cy.get('#licencetype_t').click();
  cy.get('#user_licenceperiod').select('2');
  cy.get('#user_occupation_id').select('Academic');
  cy.get('#user_address_attributes_street').type('gokul plots')
  cy.get('#user_address_attributes_city').type('Hyderabad');
  cy.get('#user_address_attributes_county').type('INDIA')
  cy.get('#user_address_attributes_postcode').type('500085');
  cy.get('#user_user_detail_attributes_email').type('jsuha@gmail.com');
  cy.get('#user_user_detail_attributes_password').type('Abc@');
  cy.get('#user_user_detail_attributes_password_confirmation').type('Abc@');
  cy.get('input[type="submit"]').click();


})






