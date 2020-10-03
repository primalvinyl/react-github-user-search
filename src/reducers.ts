import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './sagas';
import * as Actions from './actions';
import * as StoreTypes from '../__types__';


/* eslint-disable */
const initialUserState = {
    login: '',
    created_at: '',
    avatar_url: '',
    repos_url: '',
    html_url: '',
    followers: 0,
    following: 0,
    public_repos: 0
};
/* eslint-enable */
export const user = (
    state = initialUserState,
    action: Actions.PutUserActionType
): StoreTypes.UserType => {
    switch (action.type) {
        case Actions.PUT_USER:
            return {
                ...action.user
            };
        default:
            return state;
    }
}


const initialUserListState = [];
export const userList = (
    state = initialUserListState,
    action: Actions.PutUserListActionType
): StoreTypes.UserListType => {
    switch (action.type) {
        case Actions.PUT_USER_LIST:
            return [
                ...action.userList
            ]
        default:
            return state
    }
}


const initialFollowersListState = [];
export const followersList = (
    state = initialFollowersListState,
    action: Actions.PutFollowersListActionType
): StoreTypes.UserListType => {
    switch (action.type) {
        case Actions.PUT_FOLLOWERS_LIST:
            return [
                ...action.followersList
            ]
        default:
            return state
    }
}


const initialFollowListState = [];
export const followList = (
    state = initialFollowListState,
    action: Actions.PutFollowListActionType
): StoreTypes.UserListType => {
    switch (action.type) {
        case Actions.PUT_FOLLOW_LIST:
            return [
                ...action.followList
            ]
        default:
            return state
    }
}


const initialRepoListState = [];
export const repoList = (
    state = initialRepoListState,
    action: Actions.PutRepoListActionType
): StoreTypes.RepoListType => {
    switch (action.type) {
        case Actions.PUT_REPO_LIST:
            return [
                ...action.repoList
            ]
        default:
            return state
    }
}


export const rootReducer = combineReducers({
    user,
    userList,
    followersList,
    followList,
    repoList
});


const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
));
sagaMiddleware.run(rootSaga);
export default store;
