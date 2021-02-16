import React from "react";
import { AvailabilityText, Doctor } from "../../types";
import "./DoctorRow.css";

export const getAvailabilityClass = (isAvailable: boolean) =>
    isAvailable ? "available" : "unavailable";

export const getAvailabilityText = (isAvailable: boolean) =>
    !isAvailable
        ? AvailabilityText["Mark as Available"]
        : AvailabilityText["Mark as Unavailable"];

export type DoctorRowProps = Doctor & { onUpdateAvailability: () => unknown };

const DoctorRow: React.FC<DoctorRowProps> = ({
    id,
    name,
    zipCode,
    cityName,
    isAvailable,
    onUpdateAvailability,
}) => (
    <tr className={getAvailabilityClass(isAvailable)} data-upin={id}>
        <td>{name}</td>
        <td>{zipCode}</td>
        <td>{cityName}</td>
        <td>
            <button
                onClick={onUpdateAvailability}
                className={`button button-outline ${getAvailabilityClass(
                    isAvailable
                )}`}
            >
                {getAvailabilityText(isAvailable)}
            </button>
        </td>
    </tr>
);

export default DoctorRow;
