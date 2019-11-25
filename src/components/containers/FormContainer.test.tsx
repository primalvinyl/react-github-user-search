import * as React from 'react';
import { shallow } from 'enzyme';
import FormContainer from './FormContainer';

describe('FormContainer', () => {
    it('renders', () => {
      const myWrapper = shallow(<FormContainer />);
      expect(myWrapper.exists());
    });
});
