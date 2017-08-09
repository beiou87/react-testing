import * as components from '..';

describe('components', () => {
  it('exports modules correctly', () => {
    expect(Object.keys(components)).toMatchSnapshot();
  });
});
