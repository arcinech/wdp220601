import React from 'react';
import { shallow } from 'enzyme';
import Brands from './Brands';

describe('Component Brands', () => {
  it('should render without crashing', () => {
    const component = shallow(<Brands />);
    expect(component).toBeTruthy();
  });
});
