import { put, call, fork, all, take } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { AxiosTransformer } from 'axios';
import {
    GET_USER_LIST,
    GET_USER_DATA,
    putUserList,
    putUser,
    putFollowersList,
    putFollowList,
    putRepoList } from './actions';
import { getRequest } from './utilities';


/******************************** Workers *************************************/
export function* getUserListWorker(data: string, apiMethod: AxiosTransformer): SagaIterator {
    const response = yield call(apiMethod, `search/users?q=${data}`);
    yield put(putUserList(response.items));
}

export function* getUserWorker(data: string, apiMethod: AxiosTransformer): SagaIterator {
    const response = yield call(apiMethod, `users/${data}`);
    yield put(putUser(response));
}

export function* getFollowersWorker(data: string, apiMethod: AxiosTransformer): SagaIterator {
    const response = yield call(apiMethod, `users/${data}/followers?per_page=5`);
    yield put(putFollowersList(response));
}

export function* getFollowWorker(data: string, apiMethod: AxiosTransformer): SagaIterator {
    const response = yield call(apiMethod, `users/${data}/following?per_page=5`);
    yield put(putFollowList(response));
}

export function* getRepoWorker(data: string, apiMethod: AxiosTransformer): SagaIterator {
    const response = yield call(apiMethod, `users/${data}/repos?per_page=5`);
    yield put(putRepoList(response));
}


/******************************* Watchers *************************************/
export function* getUserListWatcher(): SagaIterator {
    while (true){
        const { data } = yield take(GET_USER_LIST);
        yield call(getUserListWorker, data, getRequest);
    }
}

export function* getUserDataWatcher(): SagaIterator {
    while (true){
        const { data } = yield take(GET_USER_DATA);
        yield call(getUserWorker, data, getRequest);
        yield call(getFollowersWorker, data, getRequest);
        yield call(getFollowWorker, data, getRequest);
        yield call(getRepoWorker, data, getRequest);
    }
}


/********************************* Root ***************************************/
export default function* rootSaga(): SagaIterator {
    yield all([
        fork(getUserDataWatcher),
        fork(getUserListWatcher),
    ]);
}
 