export default {

    getAddNewEmployeeButton() {
        return cy.get('[data-testid="add-employee-menu"]');
    },
    getCreateNewButton() {
        return cy.get('[data-testid="create-new-item"]');
    },
    getInputCountryField() {
        return  cy.get('.css-1mmqzn1-control'); 
    },
    getCountryOptions() {
        return  cy.contains('.css-26l3qy-menu');
    },
    getStartedButton() {
        return cy.get("#onboarding-get-started-btn");
    },
    getFirstNameField() {
        return cy.get("#0c619602-12f9-3439-b395-af234acd3963");
    },
    getLastNameField() {
        return cy.get("#cad53309-9999-3343-b6fc-50d905fc696c");
    },
    getEligibleToWork() {
        return cy.get("#ed95f22f-08b4-36b5-b2ac-3da7e6c5608a-Yes");
    },
    getNotEligibleToWork() {
        return cy.get("#ed95f22f-08b4-36b5-b2ac-3da7e6c5608a-No");
    },
    getIsExecutive(){
        return cy.get("#2f4c56f8-9e6a-32b4-a20f-6e2163bf01bb-Yes");
    },
    getNotExecutive(){
        return cy.get("#2f4c56f8-9e6a-32b4-a20f-6e2163bf01bb-No");
    },
    getJobTitleField(){
        return cy.get("#24ed4860-ad78-3fd5-a780-7e723bd4bdae");
    },
    getJobDescriptionField(){
        return cy.get("#5ef4d62f-64f7-377f-a675-7493b7e0159b");
    },
    getFullTime(){
        return cy.get("#6df3273f-62f8-3b1b-99bd-20bd70114d2a-full-time");  
    },
    getContractStartDateField(){
        return cy.get("#b2071834-a310-3a70-abea-275d7e2ed48c");  
    },
    getContractEndDateField(){
        return cy.get("#48d603ba-9aff-3770-9e0c-8c91ca2e2d6b");  
    },
    getNameSignatoryField(){
        return cy.get("#1c82bc13-1c7c-3703-85d6-0b701ab923e5");  
    },
    getTitleSignatoryField(){
        return cy.get("#97c52831-4b16-3803-83b8-da59aa005d17");  
    },
    getEmailManagerField(){
        return cy.get("#1eea20aa-dd03-3f4c-a95e-8c96a7fdce30");  
    },
    getContinueButton(){
        return cy.get("#onboarding-continue-btn");
    },
    getBaseSalaryField(){
        return cy.get("#9f1f98ee-5b15-3b27-a63f-bb0095504ec9");
    },
    getTalentEmailField(){
        return cy.get("#1351be42-60f2-3f70-81d0-ce783c8ad4f8");
    },
    getAgreementChecbox(){
        return cy.get("#serviceAgreement");
    },
    getFinishButton(){
        return cy.get("#onboarding-finish-btn");
    },
    getActionItemsMenu(){
        return cy.get("#sidebar-action-items-link"); 
    },
    getActionItem(){
        return cy.get('.sc-bUhFKy > :nth-child(4)');
    },
    getMarkAsDoneButton(){
        return cy.get('#action-items-mark-done-btn');
    }
  };

  