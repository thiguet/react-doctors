import type { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => {
    return {
        preset: "ts-jest",
        testEnvironment: "jsdom",
        verbose: true,
        testPathIgnorePatterns: ["/node_modules/"],
        roots: ["<rootDir>"],
        moduleNameMapper: {
            "^@/(.*)$": "<rootDir>/src/$1",
        },
        transform: {
            ".(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
                "<rootDir>/jest-config/file-mock.js",
            ".(css|less)$": "<rootDir>/jest-config/style-mock.js",
        },
    };
};
