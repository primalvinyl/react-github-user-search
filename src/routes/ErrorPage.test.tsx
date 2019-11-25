import * as React from 'react';
import { shallow } from 'enzyme';
import ErrorPage from './ErrorPage';

describe('ErrorPage', () => {
  it('renders', () => {
    const myWrapper = shallow(<ErrorPage />);
    expect(myWrapper.exists());
  });
});