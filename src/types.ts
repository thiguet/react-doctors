export interface Doctor {
    id: Number;
    name: String;
    zipCode: Number;
    cityName: String;
    isAvailable: Boolean;
}

export enum AvailabilityText {
    'Mark as Available' = 'Mark as Available',
    'Mark as Unavailable' = 'Mark as Unavailable',
}

export type DBDoctor = Omit<Doctor, 'isAvailable' | 'id'> & { upin: Number; available: Boolean };

export type DoctorHTML = Omit<Doctor, 'isAvailable'> & { availabilityText: AvailabilityText };
