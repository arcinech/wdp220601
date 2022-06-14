import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import { shallow } from 'enzyme';
import NewFurniture from './NewFurniture';

describe('Component NewFurniture', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <NewFurniture />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
