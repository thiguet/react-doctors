import { getData } from '../../services/DOMScanner/doctorsTable';
import { Doctor } from '../../types';
import { UPDATE_DOCTORS, UPDATE_FILTER } from '../actionTypes';

export type FilterOptions = 'All Doctors' | 'Available Doctors';

export interface State {
    selectedFilter: FilterOptions;
    doctors: Doctor[];
}

export const initialState: State = { doctors: getData(), selectedFilter: 'All Doctors' };

export type Action = { type: 'UPDATE_DOCTORS'; doctors: Doctor[] } | { type: 'UPDATE_FILTER'; filter: FilterOptions };

export default (state = initialState, action: Action) => {
    switch (action.type) {
        case UPDATE_DOCTORS:
            return { ...state, doctors: action.doctors };
        case UPDATE_FILTER:
            return { ...state, selectedFilter: action.filter };
        default:
            return state;
    }
};
