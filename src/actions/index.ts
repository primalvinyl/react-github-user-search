import * as StoreTypes from '../../__types__';




/******************************* Reducer Actions *************************************/
export const PUT_USER = 'PUT_USER';
export interface PutUserActionType {
    type: typeof PUT_USER;
    user;
}
export const putUser = (user): PutUserActionType => { 
    return {
        type: PUT_USER,
        user
    };
};


export const PUT_USER_LIST = 'PUT_USER_LIST';
export interface PutUserListActionType {
    type: typeof PUT_USER_LIST;
    userList;
}
export const putUserList = (userList): PutUserListActionType => { 
    return {
        type: PUT_USER_LIST,
        userList
    };
};


export const PUT_FOLLOWERS_LIST = 'PUT_FOLLOWERS_LIST';
export interface PutFollowersListActionType {
    type: typeof PUT_FOLLOWERS_LIST;
    followersList;
}
export const putFollowersList = (followersList): PutFollowersListActionType => { 
    return {
        type: PUT_FOLLOWERS_LIST,
        followersList
    };
};


export const PUT_FOLLOW_LIST = 'PUT_FOLLOW_LIST';
export interface PutFollowListActionType {
    type: typeof PUT_FOLLOW_LIST;
    followList;
}
export const putFollowList = (followList): PutFollowListActionType => { 
    return {
        type: PUT_FOLLOW_LIST,
        followList
    };
};


export const PUT_REPO_LIST = 'PUT_REPO_LIST';
export interface PutRepoListActionType {
    type: typeof PUT_REPO_LIST;
    repoList;
}
export const putRepoList = (repoList): PutRepoListActionType => { 
    return {
        type: PUT_REPO_LIST,
        repoList
    };
};




/******************************* Saga Actions *************************************/
export const GET_USER_DATA = 'GET_USER_DATA';
export interface GetUserDataActionType {
    type: typeof GET_USER_DATA;
    data: string;
}
export const getUserData = (data: string): GetUserDataActionType => {
    return {
        type: GET_USER_DATA,
        data
    };
};


export const GET_USER_LIST = 'GET_USER_LIST';
export interface GetUserListActionType {
    type: typeof GET_USER_LIST;
    data: StoreTypes.SearchType;
}
export const getUserList = (data: StoreTypes.SearchType): GetUserListActionType => {
    return {
        type: GET_USER_LIST,
        data
    };
};
