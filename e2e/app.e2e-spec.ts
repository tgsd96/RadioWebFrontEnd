import { RadioWPage } from './app.po';

describe('radio-w App', function() {
  let page: RadioWPage;

  beforeEach(() => {
    page = new RadioWPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
