import React from "react";
import { render, fireEvent } from "@testing-library/react";
import faker from "faker";
import SimpleSelect, {
    SimpleSelectProps,
} from "../../src/components/SimpleSelect/SimpleSelect";

const getFakeStringArray = () =>
    Array(faker.random.number({ min: 0, max: 100 }))
        .fill(null)
        .map(() => faker.random.word());

describe("SimpleSelect", () => {
    let props: SimpleSelectProps;

    const build = () => {
        const ariaLabel = faker.random.words();
        const options = getFakeStringArray();
        const onChange = jest.fn();

        props = { options, ariaLabel, onChange };

        const utils = render(<SimpleSelect {...props} />);

        const selectEl = utils.getByLabelText(ariaLabel);
        const optionsEls = utils.getAllByTestId("select-option");

        return {
            options: optionsEls,
            select: selectEl as HTMLSelectElement,
            ...utils,
        };
    };

    it("must map props options to select's options textContext", () => {
        const { options } = build();

        for (let i = 0; i < options.length; i++) {
            expect(options[i].textContent).toBe(props.options[i]);
        }
    });

    it("must call onChange prop on change", () => {
        const { select } = build();

        fireEvent.change(select, { target: { value: props.options[0] } });

        expect(props.onChange).toBeCalledWith(props.options[0]);
    });

    // Added because of the a11y
    it("must call onChange prop on blur", () => {
        const { select } = build();

        fireEvent.blur(select, { target: { value: props.options[0] } });

        expect(props.onChange).toBeCalledWith(props.options[0]);
    });
});
