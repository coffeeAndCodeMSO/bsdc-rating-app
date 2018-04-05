import React from 'react'
import App from '../src/comp/App'
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('main test block', () => {
  test('match snapshot', () => {
      const wrapper = shallow(
          <App />
      );
      expect(wrapper).toMatchSnapshot();
  });
})
