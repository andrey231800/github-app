import React, {FC, useEffect, useState} from 'react';

interface InputProps{
    handler: (value: string) => void;
    enter: boolean;
    setEnter: (enter: boolean) => void
}

const Input:FC<InputProps> = ({handler, enter, setEnter}) => {
    const [value, setValue] = useState<string>("");

    useEffect(() => {
        handler(value);
    }, [enter])

    const getUsername = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <input
            className="search_input"
            value={value}
            type="text"
            placeholder="Enter Github username"
            onChange={getUsername}
        />
    );
};

export default Input;