import React, { useState } from "react";
import "./SimpleSelect.css";

export interface SimpleSelectProps {
    options: string[];
    ariaLabel: string;
    onChange: (val: string) => unknown;
}

const SimpleSelect: React.FC<SimpleSelectProps> = ({
    options,
    onChange,
    ariaLabel,
}) => {
    const [filter, setFilter] = useState(options[0]);
    return (
        <select
            aria-label={ariaLabel}
            id="simple-select"
            data-testid="select"
            value={`${filter}`}
            onChange={(evt) => {
                const val = evt.target.value;
                setFilter(val);
                onChange(val);
            }}
            onBlur={(evt) => {
                const val = evt.target.value;
                setFilter(val);
                onChange(val);
            }}
        >
            {options.map((opt, index) => (
                <option
                    data-testid="select-option"
                    key={index}
                    value={`${opt}`}
                >
                    {opt}
                </option>
            ))}
        </select>
    );
};

export default SimpleSelect;
