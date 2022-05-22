import React, {FC, useState} from 'react';
import logo from '../assets/Vector (2).svg'
import search from '../assets/image.svg'
import Input from "./UI/Input";

import '../styles/Navbar.scss'

interface INavbar {
    value: string;
    handler: (value: string) => void;
    enter: boolean;
    setEnter: (arg: boolean) => void;
}

const Navbar:FC<INavbar> = ({value, handler, enter, setEnter}) => {

    const clickHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setEnter(true);
    }

    return (
        <form className="navbar" onSubmit={clickHandler}>
            <a href="https://github.com/" target="_blank">
                <img className="logo" src={logo} width={20} height={20} alt=""/>
            </a>
           <Input handler = {(value) => handler(value)} enter={enter} setEnter={setEnter}/>
        </form>
    );
};

export default Navbar;