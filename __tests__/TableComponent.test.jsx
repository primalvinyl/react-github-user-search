import * as React from 'react';
import { shallow } from 'enzyme';
import TableComponent from '../src/components/TableComponent';

describe('TableComponent', () => {
    it('renders', () => {
      const myWrapper = shallow(<TableComponent />);
      expect(myWrapper.exists());
    });
  });