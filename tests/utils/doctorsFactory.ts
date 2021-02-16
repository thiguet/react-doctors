import { DBDoctor, Doctor } from "@/types";
import faker from "faker";

export const getFakeDoctor = (): Doctor => ({
    id: faker.random.number({ min: 1, max: 100 }),
    name: faker.name.findName(),
    zipCode: faker.random.number({ min: 1, max: 100000 }),
    cityName: faker.address.city(),
    isAvailable: faker.random.boolean(),
});

export const getFakeDoctors = (): Doctor[] =>
    Array(faker.random.number({ min: 0, max: 100 }))
        .fill(null)
        .map(() => ({
            id: faker.random.number(),
            name: faker.name.findName(),
            zipCode: faker.random.number({ min: 1, max: 100000 }),
            cityName: faker.address.city(),
            isAvailable: faker.random.boolean(),
        }));

export const getFakeDBDoctor = (): DBDoctor => ({
    upin: faker.random.number(),
    name: faker.name.findName(),
    zipCode: faker.random.number({ min: 1, max: 100000 }),
    cityName: faker.address.city(),
    available: faker.random.boolean(),
});

export const getFakeDBDoctors = (): DBDoctor[] =>
    Array(faker.random.number({ min: 0, max: 100 }))
        .fill(null)
        .map(() => ({
            upin: faker.random.number(),
            name: faker.name.findName(),
            zipCode: faker.random.number({ min: 1, max: 100000 }),
            cityName: faker.address.city(),
            available: faker.random.boolean(),
        }));
