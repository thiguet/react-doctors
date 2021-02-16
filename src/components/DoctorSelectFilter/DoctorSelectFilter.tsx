import React from "react";
import SimpleSelect from "../SimpleSelect/SimpleSelect";
import { useDispatch } from "react-redux";
import { UPDATE_SELECT_FILTER } from "../../redux/actionTypes";

export interface DoctorFilterProps {
    options: string[];
}

const DoctorSelectFilter: React.FC<DoctorFilterProps> = ({ options }) => {
    const dispatch = useDispatch();

    return (
        <SimpleSelect
            ariaLabel="Doctors Filter"
            onChange={(value: string) =>
                dispatch({ type: UPDATE_SELECT_FILTER, filter: value })
            }
            options={options}
        ></SimpleSelect>
    );
};
export default DoctorSelectFilter;
