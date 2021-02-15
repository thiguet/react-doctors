import React, { useState } from 'react';
import './DoctorFilter.css';

export interface DoctorProps {
    options: string[];
    onChange: Function;
}

const DoctorFilter: React.FC<DoctorProps> = ({ options, onChange }) => {
    const [filter, setFilter] = useState(options[0]);
    return (
        <select
            value={`${filter}`}
            onChange={evt => {
                const val = evt.target.value;
                setFilter(val);
                onChange(val);
            }}
        >
            {options.map((opt, index) => (
                <option key={index} value={`${opt}`}>
                    {opt}
                </option>
            ))}
        </select>
    );
};

export default DoctorFilter;
