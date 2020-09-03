import { getNavbarTitle } from '../support/app.po';
import { getNavItem } from '../support/app.po';
import { getSignupForm } from '../support/app.po';
import { random } from 'cypress/types/lodash';

describe('conduit', () => {
  beforeEach(() => cy.visit('/'));

  it('should have the name of the app on the navbar even on the signup page', () => {
    // Function helper example, see `../support/app.po.ts` file
    getNavbarTitle().contains('conduit');
  });

  //Clicking on the Sign up button
  it('should be able to navigate to Sign up page after clicking on the Sign up button on the navbar on the top right corner', () => {
    getNavItem()
      .contains('Sign up')
      .trigger('mouseover')
      .click({ force: true })
      .wait(300);
  });
});

// Validating Signup Form
describe('signupform', () => {
  //  beforeEach(() => cy.visit('/register'));
  it('should have the Field - Username', () => {
    // Function helper example, see `../support/app.po.ts` file
    cy.get('[ng-reflect-name=username]')
      .focus()
      .type('testHello111')
      .should('have.value', 'testHello111');
  });
  it('should have the Field - EmailId', () => {
    // getSignupForm().contains('email');
    cy.get('[ng-reflect-name=email]')
      .focus()
      .type('cypressEmail1@email.com');
  });
  it('should have the Field - Password', () => {
    // getSignupForm().contains('password');
    cy.get('[ng-reflect-name=password]')
      .focus()
      .type('cypressemailtest1');
  });

  it('should have the Field - Username and check for the value that is typed in', () => {
    // Function helper example, see `../support/app.po.ts` file
    cy.get('[ng-reflect-name=username]')
      .focus()
      .should('have.value', 'testHello111');
  });

  it('should have the Field - EmailId and check for the value that is typed in', () => {
    cy.get('[ng-reflect-name=email]')
      .focus()
      .should('have.value', 'cypressEmail1@email.com');
  });

  it('should have the button - Submit', () => {
    cy.get('button')
      .should('be.visible')
      .click({ force: true })
      .wait(800);
  });
});
