import React from 'react';
import renderer from 'react-test-renderer';
import NavBar from '..';

it('renders correctly', () => {
  const tree = renderer.create(
    <NavBar
      leftContent={(<button>back</button>)}
      leftContent={(<button>save</button>)}      
      >
      Hello
    </NavBar>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
