import React, {FC} from 'react';
import {UserRepos} from "../types/types";

const RepoItem:FC<UserRepos> = ({name, description, html_url, id}) => {
    return (
        <div className="repo_list-item">
            <div className="repo_name">
                <a href={html_url} target="_blank">{name}</a>
            </div>
            <p className="description">{description}</p>
        </div>
    );
};

export default RepoItem;