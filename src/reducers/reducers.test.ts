import * as reducers from '.';
import * as actions from '../actions';

describe('User Reducer', () => {
    it('should put a new user', () => {
        const newUser = {};
        const actualResult = reducers.user(undefined, actions.putUser(newUser));
        expect(actualResult).toEqual(newUser);
    });
});


describe('User List Reducer', () => {
    it('should put a new user list', () => {
        const newUserList = [{}];
        const actualResult = reducers.userList(undefined, actions.putUserList(newUserList));
        expect(actualResult).toEqual(newUserList);
    });
});
