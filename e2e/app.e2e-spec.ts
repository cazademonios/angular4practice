import { SpammerPage } from './app.po';

describe('spammer App', function() {
  let page: SpammerPage;

  beforeEach(() => {
    page = new SpammerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
