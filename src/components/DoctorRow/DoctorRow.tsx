import React from 'react';
import { AvailabilityText, Doctor } from '../../types';
import './DoctorRow.css';

export const DoctorsRow: React.FC<Doctor> = ({ id, name, zipCode, cityName, isAvailable }) => (
    <tr className={isAvailable ? 'available' : 'unavailable'} data-upin={id}>
        <td>{name}</td>
        <td>{zipCode}</td>
        <td>{cityName}</td>
        <td>
            <button className={`button button-outline ${isAvailable ? 'available' : 'unavailable'}`}>
                {isAvailable ? AvailabilityText['Mark as Available'] : AvailabilityText['Mark as Unavailable']}
            </button>
        </td>
    </tr>
);

interface DoctorsRowsProps {
    rows: Doctor[];
}

export const DoctorsRows: React.FC<DoctorsRowsProps> = ({ rows }) => {
    return (
        <>
            {rows.map((row, index) => (
                <DoctorsRow key={index} {...row} />
            ))}
        </>
    );
};

export default DoctorsRows;
