import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DoctorRow from "../DoctorRow/DoctorRow";
import { State } from "../../redux/reducers/doctorsReducer";
import { UPDATE_DOCTOR_AVAILABILITY } from "../../redux/actionTypes";
import { getDoctors } from "../../services/doctorsAPI";
import { Doctor } from "@/types";

export const doctorsReducer = ({
    doctorsReducer: state,
}: {
    doctorsReducer: State;
}): Doctor[] =>
    state.doctors
        .filter((row) => {
            if (state.selectFilter === "Available Doctors") {
                return row.isAvailable;
            }

            return true;
        })
        .filter((row) => {
            const filter = state.textFilter.trim().toLowerCase();
            if (filter) {
                return (
                    row.name.toLowerCase().includes(filter) ||
                    `${row.id}`.toLowerCase().includes(filter)
                );
            }

            return true;
        });

const DoctorRowsWithFilter: React.FC = () => {
    const doctors = useSelector(doctorsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        getDoctors().then((doctors) => {
            dispatch({
                type: "UPDATE_DOCTORS",
                doctors: doctors.map((doc) => ({
                    ...doc,
                    id: doc.upin,
                    isAvailable: doc.available,
                })),
            });
        });
    }, [dispatch]);

    return (
        <>
            {doctors.map((row, index) => (
                <DoctorRow
                    key={index}
                    onUpdateAvailability={() => {
                        dispatch({
                            type: UPDATE_DOCTOR_AVAILABILITY,
                            doctor: row,
                        });
                    }}
                    {...row}
                />
            ))}
        </>
    );
};

export default DoctorRowsWithFilter;
