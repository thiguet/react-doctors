import { AvailabilityText, Doctor } from "../../types";

export const getData = (): Doctor[] =>
    [...document.querySelectorAll("tbody tr")].map((tr) => {
        const id = tr.getAttribute("data-upin");
        const tdData = [...tr.children].map((child) => child.innerHTML);
        const isAvailable = [...tr.children].pop()?.children[0].innerHTML;

        tdData.pop(); // Remove isAvailable td innerHTML

        return buildDoctor([id!, ...tdData!, isAvailable!]);
    });

export const buildDoctor = (arr: Array<string>): Doctor => ({
    id: +arr[0],
    name: arr[1],
    zipCode: +arr[2],
    cityName: arr[3],
    isAvailable: isAvailable(arr[4] as AvailabilityText),
});

const isAvailable = (str: AvailabilityText): boolean => {
    return AvailabilityText[str] === AvailabilityText["Mark as Unavailable"];
};
