// add enzyme adapter
import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });

// set node_env to test
process.env.NODE_ENV = 'test';