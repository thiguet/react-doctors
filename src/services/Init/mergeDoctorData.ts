import { getData } from '../../DOMScanner/doctorsTable';
import { DBDoctor, Doctor } from '../../types';
import { getDoctors, updateDoctors } from '../doctorsAPI';

export default async () => {
    const DOMData = getData();

    const APIdata = await getDoctors();

    const doctors = mergeData(DOMData, APIdata);

    return updateDoctors(doctors);
};

const mergeData = (DOMdata: Doctor[], APIData: DBDoctor[]): DBDoctor[] => {
    return APIData.map(API => {
        const row = DOMdata.find(row => +row.id === API.upin);
        const { id, isAvailable, ...rest } = row!;

        return {
            ...API,
            ...rest,
            available: isAvailable,
        };
    });
};
