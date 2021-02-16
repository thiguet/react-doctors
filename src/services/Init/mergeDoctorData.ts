import { getData as getDOMData } from "../DOMScanner/doctorsTable";
import { DBDoctor, Doctor } from "../../types";
import { getDoctors, updateDoctors } from "../doctorsAPI";

export default async (): Promise<Promise<void>[]> => {
    const DOMData = getDOMData();

    const APIData = await getDoctors();

    const doctorsData = mergeData(DOMData, APIData);

    return updateDoctors(doctorsData);
};

const mergeData = (DOMData: Doctor[], APIData: DBDoctor[]): DBDoctor[] => {
    return APIData.map((API) => {
        const row = DOMData.find((row) => +row.id === API.upin);
        const { id, isAvailable, ...rest } = row!;

        return {
            ...API,
            ...rest,
            available: isAvailable,
        };
    });
};
