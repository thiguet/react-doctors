import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DoctorRow, {
    DoctorRowProps,
    getAvailabilityClass,
    getAvailabilityText,
} from "../../src/components/DoctorRow/DoctorRow";
import { getFakeDoctor } from "../utils/doctorsFactory";

describe("SimpleSelect", () => {
    let props: DoctorRowProps;

    const build = () => {
        const onUpdateAvailability = jest.fn();

        const fakeDoctor = getFakeDoctor();

        props = { onUpdateAvailability, ...fakeDoctor };

        const utils = render(
            <table>
                <tbody>
                    <DoctorRow key="0" {...props} />
                </tbody>
            </table>
        );

        const tdEls = utils.container.querySelectorAll(`tr td`);
        const availabilityBtn = utils.container.querySelector(`tr td .button`);

        return {
            tds: tdEls!,
            btn: availabilityBtn!,
            ...utils,
        };
    };

    it("must map props to td elements", () => {
        const { tds, btn } = build();

        expect(tds[0].textContent).toBe(props.name);
        expect(tds[1].textContent).toBe(`${props.zipCode}`);
        expect(tds[2].textContent).toBe(props.cityName);
        expect(btn.textContent).toBe(getAvailabilityText(props.isAvailable));
    });

    it("must set the correct class accordingly on isAvailable props", () => {
        expect(getAvailabilityClass(true)).toBe("available");
        expect(getAvailabilityClass(false)).toBe("unavailable");
    });
    it("must set the correct text accordingly on isAvailable props", () => {
        expect(getAvailabilityText(true)).toBe("Mark as Unavailable");
        expect(getAvailabilityText(false)).toBe("Mark as Available");
    });

    it("must have the same class as the props passed to the component", () => {
        const { btn } = build();
        expect(
            btn.classList.contains(getAvailabilityClass(props.isAvailable))
        ).toBe(true);
    });

    it("must call onUpdateAvailability on click", () => {
        const { btn } = build();
        fireEvent.click(btn);
        expect(props.onUpdateAvailability).toBeCalled();
    });
});
