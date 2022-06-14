import React from 'react';
import store from '../../../redux/store';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import Homepage from './Homepage';

describe('Homepage', () => {
  it('renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <Homepage />
      </Provider>
    );
  });
});
