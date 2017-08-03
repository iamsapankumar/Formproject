import { FormproPage } from './app.po';

describe('formpro App', () => {
  let page: FormproPage;

  beforeEach(() => {
    page = new FormproPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
