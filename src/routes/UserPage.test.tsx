import * as React from 'react';
  import { createStore } from 'redux';
  import { Provider } from 'react-redux';
  import { shallow } from 'enzyme';
  import rootReducer from '../reducers';
  import ConnectedUserPage, { UserPage } from './UserPage';
  
  describe('UserPage', () => {
    it('renders', () => {
      const myWrapper = shallow(<UserPage />);
      expect(myWrapper.exists());
    });
    it('renders with Redux', () => {
      const data = {};
      const store = createStore(rootReducer, data);
      const myWrapper = shallow(<Provider store={store}><ConnectedUserPage /></Provider>);
      expect(myWrapper.exists());
    });
  });