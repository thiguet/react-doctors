import React from "react";
import SimpleInput from "../SimpleInput/SimpleInput";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../../redux/reducers/doctorsReducer";
import { UPDATE_TEXT_FILTER } from "../../redux/actionTypes";

const doctorsReducer = ({ doctorsReducer: state }: { doctorsReducer: State }) =>
    state.textFilter;

const DoctorTextFilter: React.FC = () => {
    const text = useSelector(doctorsReducer);
    const dispatch = useDispatch();

    return (
        <SimpleInput
            label="Filter by:"
            {...{
                text,
                setText: (val: string) =>
                    dispatch({ type: UPDATE_TEXT_FILTER, filter: val }),
            }}
        />
    );
};

export default DoctorTextFilter;
