import * as utils from '..';

describe('utils', () => {
  it('exports modules correctly', () => {
    expect(Object.keys(utils)).toMatchSnapshot();
  });
});
