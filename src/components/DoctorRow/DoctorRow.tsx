import React from 'react';
import { AvailabilityText, Doctor } from '../../types';
import './DoctorRow.css';

const getAvailabilityClass = (isAvailable: Boolean) => (isAvailable ? 'available' : 'unavailable');

const getAvailabilityText = (isAvailable: Boolean) =>
    isAvailable ? AvailabilityText['Mark as Available'] : AvailabilityText['Mark as Unavailable'];

const DoctorRow: React.FC<Doctor> = ({ id, name, zipCode, cityName, isAvailable }) => (
    <tr className={getAvailabilityClass(isAvailable)} data-upin={id}>
        <td>{name}</td>
        <td>{zipCode}</td>
        <td>{cityName}</td>
        <td>
            <button className={`button button-outline ${getAvailabilityClass(isAvailable)}`}>
                {getAvailabilityText(isAvailable)}
            </button>
        </td>
    </tr>
);

export default DoctorRow;
