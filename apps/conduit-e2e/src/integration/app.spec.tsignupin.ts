import { getNavbarTitle } from '../support/app.po';
import { getNavItem } from '../support/app.po';
import { getSignInError } from '../support/app.po';
import { getLoginItem } from '../support/app.po';
import { getBanner } from '../support/app.po';

describe('conduit', () => {
  beforeEach(() => cy.visit('/'));

  it('should have the name of the app on the navbar', () => {
    // Function helper example, see `../support/app.po.ts` file
    getNavbarTitle().contains('conduit');
  });

  it('should be able to navigate to Sign in page after clicking on the Sign In button on the navbar top right corner', () => {
    getNavItem()
      .contains('Sign in')
      .trigger('mouseover')
      .click({ force: true })
      .wait(300);
  });
});

describe('SignInFormNegativeScenario', () => {
  //Sign in - Negative Scenarios
  it('should have the Field - EmailId', () => {
    // getSignupForm().contains('email');
    cy.get('[ng-reflect-name=email]')
      .focus()
      .type('1abc@abcd1!!.com');
  });
  it('should have the Field - Password', () => {
    // getSignupForm().contains('password');
    cy.get('[ng-reflect-name=password]')
      .focus()
      .type('abc12345');
  });

  it('should have the button - Submit', () => {
    cy.get('button')
      .should('be.visible')
      .click({ force: true })
      .wait(800);
  });

  it('should check for error message for negative scenario', () => {
    //getSignInError().
    cy.contains('email or password is invalid');
  });
});

//Clear the form
describe('Clear SignInForm', () => {
  it('should clear the fields', () => {
    cy.get('[ng-reflect-name=email]').clear();
  });

  it('should have the Field - Password', () => {
    // getSignupForm().contains('password');
    cy.get('[ng-reflect-name=password]')
      .clear()
      .wait(500);
  });
});

//Sign In Form Positive Scenarios
describe('SignInFormPositiveScenario', () => {
  //Sign in - Positive Scenarios
  it('should have the Field - EmailId', () => {
    // getSignupForm().contains('email');
    cy.get('[ng-reflect-name=email]')
      .focus()
      .type('1abc@abcd1.com');
  });
  it('should have the Field - Password', () => {
    // getSignupForm().contains('password');
    cy.get('[ng-reflect-name=password]')
      .focus()
      .type('abc12345');
  });
});

//Check the Banner Items after successful Login
describe('Banner Test after Successful Login', () => {
  it('should have the button - Submit', () => {
    cy.get('button')
      .should('be.visible')
      .click({ force: true })
      .wait(800);
  });

  it('double check whether the user is actually logged in', () => {
    getLoginItem().contains('A place to share your knowledge.');
  });

  it('double check for banner after logged in', () => {
    getBanner().contains('conduit');
  });
});
