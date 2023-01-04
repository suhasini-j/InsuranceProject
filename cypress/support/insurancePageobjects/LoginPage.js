class LoginPage
{
   getEmail(){return cy.get('#email')}
   getPassword(){return cy.get('#password')}
}
export default LoginPage;