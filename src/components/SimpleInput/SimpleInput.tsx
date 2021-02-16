import React, { FC } from "react";
import "./SimpleInput.css";

export interface SimpleInputProps {
    label: string;
    text: string;
    setText: (val: string) => unknown;
}

const SimpleInput: FC<SimpleInputProps> = ({ label, text, setText }) => {
    return (
        <div className="search-wrapper">
            <label htmlFor="search">{label}</label>
            <input
                aria-label="search"
                id="search"
                type="text"
                placeholder="Type here to search:"
                value={text}
                onChange={({ target: { value } }) => setText(value)}
            />
        </div>
    );
};

export default SimpleInput;
