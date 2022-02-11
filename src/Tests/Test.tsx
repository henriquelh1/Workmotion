import login from "../pageObject/loginPage";
import onboard from "../pageObject/onboardPage";

context("Onboarding New Employee", () => {
  before(() => {
      cy.visit("https://beta.workmotion.com/login");
      login.getEmailField().type("aliaa+qahrmanager@workmotion.com");
      login.getPasswordField().type("Test1234");
      login.getSubmitButton().click();
  });

  it("Must add new employee", () => {
      onboard.getAddNewEmployeeButton().click();
      onboard.getCreateNewButton().click();
      onboard.getInputCountryField().click();
      onboard.getCountryOptions().contains('Germany').click()
      onboard.getStartedButton().click();
      onboard.getFirstNameField().type("Peter");
      onboard.getLastNameField().type("Schneider");
      onboard.getEligibleToWork().click();
      onboard.getIsExecutive().click();
      onboard.getJobTitleField().type("Engineer");
      onboard.getJobDescriptionField().type("Engineer description")
      onboard.getFullTime().click();
      onboard.getContractStartDateField().type("04-09-2022");
      onboard.getContractEndDateField().type("04-09-2023")
      onboard.getContinueButton().click();
      onboard.getNameSignatoryField().type("Lucas");
      onboard.getTitleSignatoryField().type("Head of Marketing");
      onboard.getEmailManagerField().type("lucas@lucas.com");
      onboard.getContinueButton().click();
      onboard.getContinueButton().click();
      onboard.getBaseSalaryField().type("2000");
      onboard.getTalentEmailField().type("talent@email.com")
      onboard.getFinishButton().click();
      onboard.getAgreementChecbox().click(); 
  });

  it("Must check employee added and mark as done", () => {
      onboard.getActionItemsMenu().click();
      onboard.getActionItem().contains("Peter Schneider");
      onboard.getActionItem().within(() => {
          onboard.getMarkAsDoneButton().click();
        })
      onboard.getActionItem().should('not.contain','Teest Tes');
    });
});

