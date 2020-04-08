import * as React from 'react'; 
import { shallow } from 'enzyme';
import Fallback from './Fallback';

describe('Fallback', () => {
  it('renders', () => {
    const myWrapper = shallow(<Fallback />);
    expect(myWrapper.exists());
  });
});