import React, {FC} from 'react';
import avatar from '../assets/image 1.svg'
import followersImg from '../assets/shared.svg'
import followingImg from '../assets/person_24px.svg'
import RepoList from "./RepoList";
import Subscribers from "./Subscribers";
import {IPage, UserData} from "../types/types";
import CustomPage from "./CustomPage";

import emptyList from '../assets/empty_list.svg'
import PaginationList from "./PaginationList";
import '../styles/Main.scss'
import  '../styles/CustomPage.scss'

const MainPage:FC<IPage> = ({name, id,
                                avatar_url, login, html_url, following, followers
                                , public_repos, repos}) => {

    const textFollowers = followers > 1 ? 'followers' : 'follower';
    const fixNumber = (f:string) => {
        if(f.length > 4) {
            return
        }
    }
    return (
        <div className="main">
            <div className="info">
                <img className="avatar" src={avatar_url} alt="avatar"/>
                <h2 className="name_surname">{name}</h2>
                <div className="nickname">
                    <a href={html_url} target="_blank">{login}</a>
                </div>
                <div className="subscribers">
                    <Subscribers
                        className="followers"
                        image={followersImg}
                        text={`${+followers} ${textFollowers}`}
                        alt={"followers"}
                    />
                    <Subscribers
                        className="following"
                        image={followingImg}
                        text={`${+following} following`}
                        alt={"following"}
                    />
                </div>
            </div>
            <div className="repo">
                {repos.length > 1 ?
                    <>
                        <h1>Repositories ({public_repos})</h1>

                            <PaginationList repos={repos}/>
                    </>
                    :
                    <CustomPage img={emptyList} text="Repository list is empty"/>
                }
            </div>
        </div>
    );
};

export default MainPage;