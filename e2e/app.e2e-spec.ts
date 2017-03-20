import { NgxDatatableDemoPage } from './app.po';

describe('ngx-datatable-demo App', () => {
  let page: NgxDatatableDemoPage;

  beforeEach(() => {
    page = new NgxDatatableDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
