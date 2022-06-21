import React from 'react';
import { shallow } from 'enzyme';
import ProductImage from './ProductImage';

describe('Component ProductImage', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductImage />);
    expect(component).toBeTruthy();
  });
});
