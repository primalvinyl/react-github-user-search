import { put, call, fork, all, take } from 'redux-saga/effects';
import { 
    GET_USER_DATA,
    GET_USER_LIST,
    putUser,
    putUserList,
    putFollowersList,
    putFollowList,
    putRepoList } from '../actions';
import { getUserRequest } from '../utilities';
import { SearchType } from '../../__types__';
import 'regenerator-runtime/runtime';


/******************************** Workers *************************************/
//TODO: create error notifications and log
export function* getUserWorker(data: string, apiMethod) {
    const response = yield call(apiMethod, `users/${data}`);
    yield put(putUser(response.data));
}

export function* getUserListWorker(data: SearchType, apiMethod) {
    const response = yield call(apiMethod, `search/users?q=${data.searchFilter}:${data.searchText}&per_page=20`);
    yield put(putUserList(response.data.items));
}

export function* getFollowersWorker(data: string, apiMethod) {
    const response = yield call(apiMethod, `users/${data}/followers?per_page=5`);
    yield put(putFollowersList(response.data));
}

export function* getFollowWorker(data: string, apiMethod) {
    const response = yield call(apiMethod, `users/${data}/following?per_page=5`);
    yield put(putFollowList(response.data));
}

export function* getRepoWorker(data: string, apiMethod) {
    const response = yield call(apiMethod, `users/${data}/repos?per_page=5`);
    yield put(putRepoList(response.data));
}


/******************************* Watchers *************************************/
export function* getUserDataWatcher() {
    while (true){
        const { data } = yield take(GET_USER_DATA);
        yield call(getUserWorker, data, getUserRequest);
        yield call(getFollowersWorker, data, getUserRequest);
        yield call(getFollowWorker, data, getUserRequest);
        yield call(getRepoWorker, data, getUserRequest);
    }
}

export function* getUserListWatcher() {
    while (true){
        const { data } = yield take(GET_USER_LIST);
        yield call(getUserListWorker, data, getUserRequest);
    }
}


/********************************* Root ***************************************/
export default function* rootSaga() {
    yield all([
        fork(getUserDataWatcher),
        fork(getUserListWatcher),
    ]);
}
 