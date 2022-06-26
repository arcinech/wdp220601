import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import Brands from './Brands';

describe('Component Brands', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <Brands />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
