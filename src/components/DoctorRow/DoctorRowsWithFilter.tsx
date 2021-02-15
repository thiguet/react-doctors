import React from 'react';
import DoctorRow from './DoctorRow';

import { useSelector } from 'react-redux';
import { Doctor } from '../../types';

const doctorsReducer = ({ doctorsReducer: state }: any) =>
    ((state.doctors as Doctor[]) || []).filter(row => {
        if (state.selectedFilter === 'Available Doctors') {
            return row.isAvailable;
        }

        return true;
    });

const DoctorRowsWithFilter: React.FC = () => {
    const doctors = useSelector(doctorsReducer);

    return (
        <>
            {doctors.map((row, index) => (
                //onUpdateAvailability={() => }
                <DoctorRow key={index} {...row} />
            ))}
        </>
    );
};

export default DoctorRowsWithFilter;
