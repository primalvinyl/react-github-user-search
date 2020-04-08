/******************************* Store Types *************************************/
export interface RepoType {
    name: string;
    description: string;
}

export type RepoListType = RepoType[];

export interface UserType {
    login: string;
    created_at: string;
    avatar_url: string;
    repos_url: string;
    html_url: string;
    followers: number;
    following: number;
    public_repos: number;
}

export type UserListType = UserType[];




/******************************* UI Types *************************************/
export interface SearchType {
    searchText: string;
    searchFilter: string;
}
