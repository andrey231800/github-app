export interface UserData {
    name: string;
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    followers: number;
    following: number;
    public_repos: number;
}

export interface UserRepos {
    id: number;
    name: string | null;
    description: string | null;
    html_url: string ;
    message?: string;
}

export interface IPage extends UserData {
    repos: UserRepos[];
}
