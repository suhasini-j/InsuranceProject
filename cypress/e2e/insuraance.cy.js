/// <reference types="Cypress" />

import LoginPage from "../support/insurancePageobjects/LoginPage"
import RequestQuotationpage from '../support/insurancePageobjects/RequestQuotationpage'
import RetriveQuotationPage from '../support/insurancePageobjects/RetriveQuotationPage'
import EditprofilePage from '../support/insurancePageobjects/editprofilePage'
describe('Register ', function () {
  before(function () {
    cy.fixture('example').then(function (data) {
      this.data = data

    })

  })
  it('register and login', function () {
    const loginPage = new LoginPage()
    const requestQuotationpage = new RequestQuotationpage()
    const retriveQuotationPage = new RetriveQuotationPage()
    cy.visit("https://demo.guru99.com/insurance/v1/index.php")
    

    
    loginPage.getEmail().type('rani.rose@gmail.com');
    loginPage.getPassword().type('today@123');
    cy.get("input[type='submit']").click();
    cy.get('a#ui-id-2.ui-tabs-anchor').click();

    //for RequestQuotationpage

    requestQuotationpage.getBreakdowncover().select('At home', { force: true });
    requestQuotationpage.getWindscreenrepair().click({ force: true });
    requestQuotationpage.getIncidents().type(this.data.incidents);
    requestQuotationpage.getRegistration().type(this.data.registration);
    requestQuotationpage.getAnnualmileage().type(this.data.annualmileage);
    requestQuotationpage.getEstimatedvalue().type(this.data.estimatedvalue);
    requestQuotationpage.getParkingLocation().select('Street/Road');
    requestQuotationpage.getStartofpolicyYear().select('2023');
    requestQuotationpage.getStartofpolicyMonth().select('January');
    requestQuotationpage.getStartofpolicyDate().select('5');
    requestQuotationpage.getCalculatePremium().click();
    requestQuotationpage.getSaveQuotation().click();
    cy.get('body > :nth-child(1)').should('have.text', 'You have saved this quotation!');
    cy.go('back');
    //for Retrieve Quotation page
    cy.get('#retrieve').click();
    retriveQuotationPage.getIdentificationnumber().type('19783');
    retriveQuotationPage.getRetrieve().click();
    cy.contains('Breakdowncover').should('be.visible');
    cy.go('back');

  })
  //Login Failure
  it('Login Failure', function () {
    const loginPage = new LoginPage()

   // cy.contains('Login');
    loginPage.getEmail().type('rani.rose@gmail.com');
    loginPage.getPassword().type('');
    cy.get("input[type='submit']").click();

  })
  it("profile", function () {

    cy.get('#ui-id-4').click();
  })
  it("Edit profile", function () {
    const editprofilePage = new EditprofilePage()


    cy.get('#ui-id-5').click();
    editprofilePage.getTitle().select('Mrs')
    editprofilePage.getPhone().type('9494125613');
    editprofilePage.getUpdateuser().click();

  })
  it("logout", function () {


    cy.get('input[value="Log out"]').click()

  })
})