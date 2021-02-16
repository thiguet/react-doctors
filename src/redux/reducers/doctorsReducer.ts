import { Doctor } from "../../types";
import {
    UPDATE_DOCTORS,
    UPDATE_SELECT_FILTER,
    UPDATE_TEXT_FILTER,
    UPDATE_DOCTOR_AVAILABILITY,
} from "../actionTypes";
import { updateDoctorAvailability } from "../../services/doctorsAPI";

export type FilterOptions = "All Doctors" | "Available Doctors";

export interface State {
    selectFilter: FilterOptions;
    textFilter: string;
    doctors: Doctor[];
}

export const initialState: State = {
    doctors: [],
    textFilter: "",
    selectFilter: "All Doctors",
};

export type Action =
    | { type: "UPDATE_DOCTORS"; doctors: Doctor[] }
    | { type: "UPDATE_DOCTOR_AVAILABILITY"; doctor: Doctor }
    | { type: "UPDATE_SELECT_FILTER"; filter: FilterOptions }
    | { type: "UPDATE_TEXT_FILTER"; filter: string };

export default (state = initialState, action: Action): State => {
    switch (action.type) {
        case UPDATE_DOCTORS:
            return { ...state, doctors: action.doctors };
        case UPDATE_SELECT_FILTER:
            return { ...state, selectFilter: action.filter };
        case UPDATE_TEXT_FILTER:
            return { ...state, textFilter: action.filter };
        case UPDATE_DOCTOR_AVAILABILITY:
            updateDoctorAvailability(
                action.doctor.id,
                !action.doctor.isAvailable
            );

            return {
                ...state,
                doctors: state.doctors.map((doc) => {
                    if (doc.id === action.doctor.id) {
                        const newDoc = {
                            ...doc,
                            isAvailable: !doc.isAvailable,
                        };
                        return newDoc;
                    }
                    return doc;
                }),
            };
        default:
            return state;
    }
};
