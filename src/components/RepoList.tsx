import React, {FC} from 'react';
import RepoItem from "./RepoItem";
import {UserRepos} from "../types/types";

interface RepoList {
    repos: UserRepos[]
}

const RepoList:FC<RepoList> = ({repos}) => {
    return (
        <div className="repo_list">
            {Array.isArray(repos) && repos.map(repo =>
                <RepoItem
                    name={repo.name}
                    html_url={repo.html_url}
                    key={repo.id}
                    description={repo.description}
                    id={repo.id}
                />
            )}
        </div>
    );
};

export default RepoList;