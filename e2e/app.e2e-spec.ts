import { PMoviesCliPage } from './app.po';

describe('p-movies-cli App', function() {
  let page: PMoviesCliPage;

  beforeEach(() => {
    page = new PMoviesCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
