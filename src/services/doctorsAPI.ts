import axios from "axios";
import { DBDoctor } from "../types";

export const url = "http://localhost:3030/doctors";

export const instance = axios.create({
    baseURL: url,
    headers: {
        "Content-Type": "application/json",
    },
});

export const getDoctors = async (): Promise<DBDoctor[]> =>
    (await instance.get(url)).data as DBDoctor[];

export const updateDoctor = (data: DBDoctor): Promise<void> =>
    instance.put(`${url}/${data.upin}`, data);

export const updateDoctorAvailability = (
    upin: number,
    isAvailable: boolean
): Promise<void> =>
    instance.patch(`${url}/${upin}`, { available: isAvailable });

export const updateDoctors = (arr: DBDoctor[]): Promise<void>[] =>
    arr.map(updateDoctor);
