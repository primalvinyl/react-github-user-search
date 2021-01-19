import * as React from 'react';
  import { createStore } from 'redux';
  import { Provider } from 'react-redux';
  import { shallow } from 'enzyme';
  import { rootReducer } from '../src/store/reducers';
  import SearchPage from '../src/routes/SearchPage';
  
  describe('SearchPage', () => {
    it('renders with Redux', () => {
      const data = {};
      const store = createStore(rootReducer, data);
      const myWrapper = shallow(<Provider store={store}><SearchPage /></Provider>);
      expect(myWrapper.exists());
    });
  });