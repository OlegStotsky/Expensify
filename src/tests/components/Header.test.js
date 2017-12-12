import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import Header from '../../components/Header.js';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
});