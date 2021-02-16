import { DBDoctor } from "@/types";
import faker from "faker";

export const getFakeDoctor = (): DBDoctor => ({
    upin: faker.random.number(),
    name: faker.name.findName(),
    zipCode: +faker.address.zipCode(),
    cityName: faker.address.city(),
    available: faker.random.boolean(),
});

export const getFakeDoctors = (): DBDoctor[] =>
    Array(faker.random.number({ min: 0, max: 100 }))
        .fill(null)
        .map(() => ({
            upin: faker.random.number(),
            name: faker.name.findName(),
            zipCode: +faker.address.zipCode(),
            cityName: faker.address.city(),
            available: faker.random.boolean(),
        }));
