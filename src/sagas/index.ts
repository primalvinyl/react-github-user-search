import { put, call, fork, all, take } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { AxiosTransformer } from 'axios';
import { 
    GET_USER_DATA,
    GET_USER_LIST,
    putUser,
    putUserList,
    putFollowersList,
    putFollowList,
    putRepoList } from '../actions';
import { getRequest } from '../utilities';
import * as StoreTypes from '../../__types__';


/******************************** Workers *************************************/
export function* getUserWorker(data: string, apiMethod: AxiosTransformer): SagaIterator {
    const response = yield call(apiMethod, `users/${data}`);
    yield put(putUser(response.data));
}

export function* getUserListWorker(data: StoreTypes.SearchType, apiMethod: AxiosTransformer): SagaIterator {
    const response = yield call(apiMethod, `search/users?q=${data.searchFilter}:${data.searchText}&per_page=20`);
    yield put(putUserList(response.data.items));
}

export function* getFollowersWorker(data: string, apiMethod: AxiosTransformer): SagaIterator {
    const response = yield call(apiMethod, `users/${data}/followers?per_page=5`);
    yield put(putFollowersList(response.data));
}

export function* getFollowWorker(data: string, apiMethod: AxiosTransformer): SagaIterator {
    const response = yield call(apiMethod, `users/${data}/following?per_page=5`);
    yield put(putFollowList(response.data));
}

export function* getRepoWorker(data: string, apiMethod: AxiosTransformer): SagaIterator {
    const response = yield call(apiMethod, `users/${data}/repos?per_page=5`);
    yield put(putRepoList(response.data));
}


/******************************* Watchers *************************************/
export function* getUserDataWatcher(): SagaIterator {
    while (true){
        const { data } = yield take(GET_USER_DATA);
        yield call(getUserWorker, data, getRequest);
        yield call(getFollowersWorker, data, getRequest);
        yield call(getFollowWorker, data, getRequest);
        yield call(getRepoWorker, data, getRequest);
    }
}

export function* getUserListWatcher(): SagaIterator {
    while (true){
        const { data } = yield take(GET_USER_LIST);
        yield call(getUserListWorker, data, getRequest);
    }
}


/********************************* Root ***************************************/
export default function* rootSaga(): SagaIterator {
    yield all([
        fork(getUserDataWatcher),
        fork(getUserListWatcher),
    ]);
}
 