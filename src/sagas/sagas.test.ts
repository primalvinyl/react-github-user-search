import { expectSaga } from 'redux-saga-test-plan';
import * as sagas from '.';
import * as actions from '../actions';

describe('Get User Saga', () => {
    it('it works', () => {
        const sendData = 'Tucker';
        const responseData = {};
        const putData = {};
        const mockApiMethod = () => (responseData);
        return expectSaga(sagas.getUserWorker, sendData, mockApiMethod)
            .put(actions.putUser(putData))
            .run();
    });
});


describe('Get User List Saga', () => {
    it('it works', () => {
        const sendData = 'Tucker';
        const responseData = { items: [{}] };
        const putData = [{}];
        const mockApiMethod = () => (responseData);
        return expectSaga(sagas.getUserListWorker, sendData, mockApiMethod)
            .put(actions.putUserList(putData))
            .run();
    });
});
