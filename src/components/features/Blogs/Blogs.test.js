import React from 'react';
import { shallow } from 'enzyme';
import Blogs from './Blogs';

describe('Component Blogs', () => {
  it('should render without crashing', () => {
    const component = shallow(<Blogs />);
    expect(component).toBeTruthy();
  });
});
