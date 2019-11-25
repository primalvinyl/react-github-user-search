import * as React from 'react'; 
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('renders', () => {
    const myWrapper = shallow(<Button />);
    expect(myWrapper.exists());
  });
});