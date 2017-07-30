import { ShopvillaPage } from './app.po';

describe('shopvilla App', () => {
  let page: ShopvillaPage;

  beforeEach(() => {
    page = new ShopvillaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
