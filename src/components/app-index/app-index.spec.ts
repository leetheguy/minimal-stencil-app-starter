import { render } from '@stencil/core/testing';
import { AppIndex } from './app-index';

describe('app-index', () => {
  it('should build', () => {
    expect(new AppIndex()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppIndex],
        html: '<app-index></app-index>'
      });
    });
  });
});