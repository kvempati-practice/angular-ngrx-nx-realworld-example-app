import { getNavbarTitle } from '../support/app.po';
import { getTagList } from '../support/app.po';

describe('conduit', () => {
  beforeEach(() => cy.visit('/'));

  it('should have the name of the app on the navbar', () => {
    // Function helper example, see `../support/app.po.ts` file
    getNavbarTitle().contains('conduit');
  });

  //Tag Name List Array
  const tagNames = ['HuManIty', 'Gandhi', 'HITLER', 'SIDA', 'BlackLivesMatter', 'test', 'dragons', 'butt'];

  //Validating Tag Names
  tagNames.forEach(tagname => {
    const failureStr = `should have the tag names ${tagname}`;
    it(failureStr, () => {
      getTagList().contains(tagname);
    });
  });
});
