import * as React from 'react';
import { shallow } from 'enzyme';
import TableElement from '../src/components/TableElement';

describe('TableElement', () => {
    it('renders', () => {
      const myWrapper = shallow(<TableElement />);
      expect(myWrapper.exists());
    });
  });