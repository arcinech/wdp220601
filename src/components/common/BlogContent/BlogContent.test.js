import React from 'react';
import { shallow } from 'enzyme';
import BlogContent from './BlogContent';

describe('Component BlogContent', () => {
  it('should render without crashing', () => {
    const component = shallow(<BlogContent />);
    expect(component).toBeTruthy();
  });
});
