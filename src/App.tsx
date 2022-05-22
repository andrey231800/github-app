import React, {useEffect, useState} from 'react';
import './App.scss';
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import {UserData, UserRepos} from "./types/types";
import CustomPage from "./components/CustomPage";

import search from './assets/image.svg'
import user from './assets/Union.svg'
import './styles/Spinner.scss'
import Spinner from "./components/Spinner";

function App() {
  const [data, setData] = useState<UserData | null>(null);
  const [value, setValue] = useState<string>('');
  const [repos, setRepos] = useState<UserRepos[]>([]);
  const [enter, setEnter] = useState<boolean>(false);

  useEffect(() => {
     setTimeout(() => {
         try {
             fetch( `https://api.github.com/users/${value.trim()}`)
                 .then(res => res.json())
                 .then(json => setData(json))
             fetch(`https://api.github.com/users/${value.trim()}/repos?per_page=100`)
                 .then((res => res.json()))
                 .then(json => setRepos(json));
             setEnter(false)
         }catch (e) {
             console.log(e)
         }
     }, 500)
  }, [value])


    console.log(data)

    const condition = () => {
         if (!value) {
            return <CustomPage
                img={search}
                text='Start with searching a Github user'
            />
        } else if(enter) {
             return <Spinner/>
         }
         else if (Array.isArray(repos) && data && repos) {
            return <MainPage
                name={data.name}
                login={data.login}
                html_url={data.html_url}
                avatar_url={data.avatar_url}
                id={data.id}
                followers={data.followers}
                following={data.following}
                public_repos={data.public_repos}
                repos={repos}
            />
        }
         else if (!Array.isArray(repos) && value && !enter) {
             return <CustomPage
                 img={user}
                 text='User not found'
             />
         }
    }
  return (
    <div className="App">
        <Navbar value={value} handler={(value) => setValue(value)} enter={enter} setEnter={setEnter}/>
        {condition()}
    </div>
  );
}

export default App;
