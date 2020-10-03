import * as React from 'react';
import { shallow } from 'enzyme';
import Select from '../src/components/Select';

describe('Select', () => {
  it('renders', () => {
    const myWrapper = shallow(<Select />);
    expect(myWrapper.exists());
  });
});