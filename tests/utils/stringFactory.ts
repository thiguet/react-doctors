import faker from "faker";

export const getFakeStringArray = () =>
    Array(faker.random.number({ min: 0, max: 100 }))
        .fill(null)
        .map(() => faker.random.word());
