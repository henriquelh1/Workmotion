export default {
    getEmailField() {
      return cy.get("#email");
    },
    getPasswordField() {
        return cy.get("#password");
    },
    getSubmitButton() {
        return  cy.get("[type='submit']").contains("Login");
    },
  };