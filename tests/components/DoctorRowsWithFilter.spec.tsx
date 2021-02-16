import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DoctorRowsWithFilter, {
    doctorsReducer,
} from "../../src/components/DoctorRowsWithFilter/DoctorRowsWithFilter";
import {
    getFakeDBDoctors,
    getFakeDoctor,
    getFakeDoctors,
} from "../utils/doctorsFactory";
import * as doctorsAPI from "../../src/services/doctorsAPI";
import * as ReactRedux from "react-redux";
import { Doctor } from "../../src/types";
import faker from "faker";

describe("DoctorRowsWithFilter", () => {
    const build = () => {
        const fakeDoctor = getFakeDoctor();
        const fakeDoctors = getFakeDoctors();
        const fakeDBDoctors = getFakeDBDoctors();

        const spyDoctorsAPI = jest
            .spyOn(doctorsAPI, "getDoctors")
            .mockResolvedValue(fakeDBDoctors);
        const dispatchFn = jest
            .spyOn(ReactRedux, "useDispatch")
            .mockImplementation(() => jest.fn);
        jest.spyOn(ReactRedux, "useSelector").mockImplementation(
            () => fakeDoctors
        );

        const utils = render(
            <table>
                <tbody>
                    <DoctorRowsWithFilter />
                </tbody>
            </table>
        );

        return {
            dispatchFn,
            fakeDoctor,
            fakeDoctors,
            fakeDBDoctors,
            spyDoctorsAPI,
            ...utils,
        };
    };

    it("must have called spyDoctorsAPI", () => {
        const { spyDoctorsAPI, dispatchFn } = build();
        expect(spyDoctorsAPI).toBeCalled();
        expect(dispatchFn).toBeCalled();
    });

    it("must filter doctors", () => {
        const { fakeDoctors, fakeDoctor } = build();
        const newDoctors: Doctor[] = [...fakeDoctors, fakeDoctor];

        const doctors = doctorsReducer({
            doctorsReducer: {
                doctors: newDoctors,
                selectFilter: "All Doctors",
                textFilter: fakeDoctor.name,
            },
        });

        expect(doctors).toEqual([fakeDoctor]);
    });

    it("must filter available doctors", () => {
        const { fakeDoctors, fakeDoctor } = build();

        fakeDoctor.isAvailable = true;

        const newDoctors: Doctor[] = [...fakeDoctors, fakeDoctor];

        const doctors = doctorsReducer({
            doctorsReducer: {
                doctors: newDoctors,
                selectFilter: "Available Doctors",
                textFilter: fakeDoctor.name,
            },
        });

        expect(doctors).toEqual([fakeDoctor]);
    });

    it("must return all doctors when no text filtering", () => {
        const { fakeDoctors, fakeDoctor } = build();

        fakeDoctor.isAvailable = true;

        const newDoctors: Doctor[] = [...fakeDoctors, fakeDoctor];

        const doctors = doctorsReducer({
            doctorsReducer: {
                doctors: newDoctors,
                selectFilter: "All Doctors",
                textFilter: "",
            },
        });

        expect(doctors).toEqual(newDoctors);
    });

    it("must dispatch event on click", () => {
        const { container, dispatchFn } = build();

        const firstDoctorRow = container.querySelectorAll("tr td .button")[0];

        fireEvent.click(firstDoctorRow);

        expect(dispatchFn).toBeCalled();
    });
});
