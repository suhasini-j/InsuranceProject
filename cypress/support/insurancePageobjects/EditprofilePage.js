class EditprofilePage
{
    getTitle(){return cy.get('#user_title')}
    getPhone(){return cy.get('input[id="user_phone"]')}
    getUpdateuser(){return cy.get('input[name="commit"]')}
}
export default EditprofilePage;