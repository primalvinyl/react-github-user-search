import * as React from 'react';
import { shallow } from 'enzyme';
import Input from '../src/components/Input';

describe('Input', () => {
  it('renders', () => {
    const myWrapper = shallow(<Input />);
    expect(myWrapper.exists());
  });
});