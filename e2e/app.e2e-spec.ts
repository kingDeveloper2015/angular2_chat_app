import { Angular2ChatAppPage } from './app.po';

describe('angular2-chat-app App', function() {
  let page: Angular2ChatAppPage;

  beforeEach(() => {
    page = new Angular2ChatAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
