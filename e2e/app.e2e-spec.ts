import { TestNg1Page } from './app.po';

describe('test-ng1 App', () => {
  let page: TestNg1Page;

  beforeEach(() => {
    page = new TestNg1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
