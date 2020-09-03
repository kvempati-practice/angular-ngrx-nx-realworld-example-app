import { getNavbarTitle } from '../support/app.po';
import { getNavItem } from '../support/app.po';

import { getLoginItem } from '../support/app.po';
import { getBanner } from '../support/app.po';
import { getNavBarAfterLogin } from '../support/app.po';
import { getSignInError } from '../support/app.po';

describe('conduit', () => {
  beforeEach(() => cy.visit('/'));

  it('should have the name of the app on the navbar', () => {
    // Function helper example, see `../support/app.po.ts` file
    getNavbarTitle().contains('conduit');
  });

  //Click on Sign In button to navigate to Login page
  it('should be able to navigate to Sign in page after clicking on the Sign in button on the navbar on the top riht corner', () => {
    getNavItem()
      .contains('Sign in')
      .trigger('mouseover')
      .click({ force: true })
      .wait(300);
  });
});

//Validating successful Login
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

//Validating Banner after Successful Login
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

// Validating User Settings link
describe('User Settings', () => {
  it('should be able to click on Settings button on the navbar on the top riht corner', () => {
    // ******  test Home click works but need Settings and other links need to be worked,
    //they are missing the link names ****** Easily fixed if the devloper fixes it adding name
    getNavItem()
      .contains('Home')
      .trigger('mouseover')
      .click({ force: true })
      .wait(300);

    cy.get('a')
      .should('have.attr', 'href', '#/settings')
      .trigger('mouseover')
      .click({ force: true });

    //****** BELOW IS THE LIST OF WAYS TO AUTOMATE IN CASE THE LINKS ARE FIXED AND SO KEEPING THEM FOR NOW */

    // cy.get('.navbar navbar-light').contains('/settings').click({force:true}).wait(500);
    // cy.get('a.nav-link=Settings').should('be.visible').trigger('mousedown').click({force:true});
    // getNavBarAfterLogin().contains('ng-reflect-router-link=//settings').focus().click().wait(500);
    // cy.contains('[ng-reflect-router-link=/settings]').trigger('mouseover').click({force:true}).wait(300);
    // cy.get('[ng-reflect-router-link=/settings]').trigger('mouseover').click({force:true}).wait(500);
    // cy.contains('.navbar navbar-light
  });

  //Validating Settings page
  it('should be navigated to Your Settings Page', () => {
    cy.contains('Your Settings').should('be.visible');
  });
});
