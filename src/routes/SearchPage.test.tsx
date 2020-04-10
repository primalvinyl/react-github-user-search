import * as React from 'react';
  import { createStore } from 'redux';
  import { Provider } from 'react-redux';
  import { shallow } from 'enzyme';
  import rootReducer from '../reducers';
  import SearchPage from './SearchPage';
  
  describe('SearchPage', () => {
    it('renders with Redux', () => {
      const data = {};
      const store = createStore(rootReducer, data);
      const myWrapper = shallow(<Provider store={store}><SearchPage /></Provider>);
      expect(myWrapper.exists());
    });
  });