import { CroquetAustraliaAdminWebsitePage } from './app.po';

describe('croquet-australia-admin-website App', function() {
  let page: CroquetAustraliaAdminWebsitePage;

  beforeEach(() => {
    page = new CroquetAustraliaAdminWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
