import axios from 'axios';
import { DBDoctor } from '../types';

const url = 'http://localhost:3030/doctors';

const instance = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getDoctors = async (): Promise<DBDoctor[]> => (await instance.get(url))?.data as DBDoctor[];

export const updateDoctor = (data: DBDoctor) => instance.put(`${url}/${data.upin}`, data);

export const updateDoctors = (arr: DBDoctor[]) => arr.map(updateDoctor);
