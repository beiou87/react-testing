import React from 'react';
import renderer from 'react-test-renderer';
import Link from '..';

const component = renderer.create(
  <Link to="http://www.facebook.com">Facebook</Link>
);
let tree = component.toJSON();

it('renders correctly', () => {
  expect(tree).toMatchSnapshot();
});

test('Link changes the class when hovered', () => {
  expect(tree).toMatchSnapshot();
  tree.props.onMouseEnter();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  tree.props.onMouseLeave();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
