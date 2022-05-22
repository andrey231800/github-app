import React, {FC} from 'react';
import followers from "../assets/shared.svg";

interface ISubscribe {
    className: string;
    image: any;
    text: string
    alt: string
}

const Subscribers:FC<ISubscribe> = ({className, image, text, alt}) => {
    return (
        <div className={className}>
            <img src={image} alt={alt}/>
            <p>{text}</p>
        </div>
    );
};

export default Subscribers;