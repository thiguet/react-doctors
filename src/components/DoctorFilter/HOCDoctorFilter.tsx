import React from 'react';
import { State } from '../../redux/reducers/doctorsReducer';
import DoctorFilter from './DoctorFilter';
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_FILTER } from '../../redux/actionTypes';

export interface DoctorFilterProps {
    options: string[];
}

const HOCDoctorFilter: React.FC<DoctorFilterProps> = ({ options }) => {
    const dispatch = useDispatch();

    return (
        <DoctorFilter
            onChange={(value: string) => dispatch({ type: UPDATE_FILTER, filter: value })}
            options={options}
        ></DoctorFilter>
    );
};
export default HOCDoctorFilter;
