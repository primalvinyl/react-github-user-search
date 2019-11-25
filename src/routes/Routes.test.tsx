import * as React from 'react'; 
import { shallow } from 'enzyme';
import Routes from './Routes';

describe('Routes', () => {
  it('renders', () => {
    const myWrapper = shallow(<Routes />);
    expect(myWrapper.exists());
  });
});
