import React from "react";
import { AvailabilityText, Doctor } from "../../types";
import "./DoctorRow.css";

const getAvailabilityClass = (isAvailable: boolean) =>
    isAvailable ? "available" : "unavailable";

const getAvailabilityText = (isAvailable: boolean) =>
    !isAvailable
        ? AvailabilityText["Mark as Available"]
        : AvailabilityText["Mark as Unavailable"];

const DoctorRow: React.FC<Doctor & { onUpdateAvailability: () => unknown }> = ({
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
