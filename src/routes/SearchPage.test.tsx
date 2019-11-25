import * as React from 'react';
  import { createStore } from 'redux';
  import { Provider } from 'react-redux';
  import { shallow } from 'enzyme';
  import rootReducer from '../reducers';
  import ConnectedSearchPage, { SearchPage } from './SearchPage';
  
  describe('SearchPage', () => {
    it('renders', () => {
      const myWrapper = shallow(<SearchPage />);
      expect(myWrapper.exists());
    });
    it('renders with Redux', () => {
      const data = {};
      const store = createStore(rootReducer, data);
      const myWrapper = shallow(<Provider store={store}><ConnectedSearchPage /></Provider>);
      expect(myWrapper.exists());
    });
  });