/******************************* Store Types *************************************/

/**
 * TODO: Finish UserType
 * Add Followers, Following, and Repo types
*/

export interface UserType {
    login: string;
    created_at: string;
    avatar_url: string;
    repos_url: string;
    html_url: string;
    followers: number;
    following: number;
    public_repos: number;
};

export type UserListType = UserType[];




/******************************* UI Types *************************************/
export interface SearchType {
    searchText: string;
    searchFilter: string;
}
