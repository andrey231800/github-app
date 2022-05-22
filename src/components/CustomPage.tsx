import React, {FC} from 'react';

interface IPage {
    img: string;
    text: string;
}

const CustomPage:FC<IPage> = ({img, text}) => {
    return (
        <div className="customPage">
            <img className="logo" src={img} alt=""/>
            <p className="text">{text}</p>
        </div>
    );
};

export default CustomPage;