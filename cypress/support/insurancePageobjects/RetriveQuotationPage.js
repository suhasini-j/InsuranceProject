class RetriveQuotationPage
{
    getIdentificationnumber(){return cy.get('input[name="id"]')}
    getRetrieve(){return cy.get('#getquote')}
}
export default RetriveQuotationPage;