import * as React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('renders', () => {
    const myWrapper = shallow(<App />);
    expect(myWrapper.exists());
  });
});