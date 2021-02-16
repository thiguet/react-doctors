export interface Doctor {
    id: number;
    name: string;
    zipCode: number;
    cityName: string;
    isAvailable: boolean;
}

export enum AvailabilityText {
    "Mark as Available" = "Mark as Available",
    "Mark as Unavailable" = "Mark as Unavailable",
}

export type DBDoctor = Omit<Doctor, "isAvailable" | "id"> & {
    upin: number;
    available: boolean;
};

export type DoctorHTML = Omit<Doctor, "isAvailable"> & {
    availabilityText: AvailabilityText;
};
