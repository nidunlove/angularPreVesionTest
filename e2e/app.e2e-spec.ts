import { MyNg2TestPage } from './app.po';

describe('my-ng2-test App', () => {
  let page: MyNg2TestPage;

  beforeEach(() => {
    page = new MyNg2TestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
