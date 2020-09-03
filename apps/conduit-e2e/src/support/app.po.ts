//constant file

//Before Login
export const getNavbarTitle = () => cy.get('.navbar-brand');
export const getTagList = () => cy.get('.tag-list');
export const getNavItem = () => cy.get('.nav-item');
export const getLoginItem = () => cy.get('.container');
export const getNavBarAfterLogin = () => cy.get('.navbar navbar-light');

//Signup Page
export const getSignupForm = () => cy.get('.form-control form-control-lg ng-pristine ng-invalid ng-touched');
//('.dynamic-form ng-pristine ng-invalid ng-touched');
//('.form-control form-control-lg ng-pristine ng-invalid ng-touched');

//Sign In Error messages
export const getSignInError = () => cy.get('.error-messages');

//Banner Message
export const getBanner = () => cy.get('.banner');

//User Settings
//ng-reflect-router-link
