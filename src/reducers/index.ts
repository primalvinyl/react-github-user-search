import { combineReducers } from 'redux';
import * as Actions from '../actions';
import * as StoreTypes from '../../__types__';

const initialUserState = {};
export function user(
    state = initialUserState,
    action: Actions.PutUserActionType
){
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
export function userList(
    state = initialUserListState,
    action: Actions.PutUserListActionType
){
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
export function followersList(
    state = initialFollowersListState,
    action: Actions.PutFollowersListActionType
){
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
export function followList(
    state = initialFollowListState,
    action: Actions.PutFollowListActionType
){
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
export function repoList(
    state = initialRepoListState,
    action: Actions.PutRepoListActionType
){
    switch (action.type) {
        case Actions.PUT_REPO_LIST:
            return [
                ...action.repoList
            ]
        default:
            return state
    }
}


const rootReducer = combineReducers({
    user,
    userList,
    followersList,
    followList,
    repoList
});
export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
