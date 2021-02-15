import { Doctor } from '../types';
import { UPDATE_DOCTORS, UPDATE_FILTER } from './actionTypes';

export const updateDoctors = (doctors: Doctor[]) => ({
    type: UPDATE_DOCTORS,
    payload: {
        doctors,
    },
});

export const updateFilter = (selectedFilter: string) => ({
    type: UPDATE_FILTER,
    payload: { selectedFilter },
});
