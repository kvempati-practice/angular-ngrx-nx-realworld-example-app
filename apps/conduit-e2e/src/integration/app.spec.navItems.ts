import { getNavbarTitle } from '../support/app.po';
import { getTagList } from '../support/app.po';
import { getNavItem } from '../support/app.po';
import { stringify } from 'querystring';

describe('conduit', () => {
  beforeEach(() => cy.visit('/'));

  it('should have the name of the app on the navbar', () => {
    // Function helper example, see `../support/app.po.ts` file
    getNavbarTitle().contains('conduit');
  });

  //Navigation Items Array
  const navItems = ['Home', 'Sign in', 'Sign up'];

  //Validating Navigation array before login
  navItems.forEach(name => {
    const failureStr = `should have the tag names ${name}`;
    it(failureStr, () => {
      getNavItem().contains(name);
    });
  });
});
