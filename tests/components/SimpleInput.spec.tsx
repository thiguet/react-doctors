import React from "react";
import { render, fireEvent } from "@testing-library/react";
import faker from "faker";
import SimpleInput, {
    SimpleInputProps,
} from "../../src/components/SimpleInput/SimpleInput";

describe("SimpleInput", () => {
    let props: SimpleInputProps;

    const build = () => {
        const text = faker.random.words();
        const setText = jest.fn();
        const label = faker.name.jobArea();

        props = { setText, text, label };

        const utils = render(<SimpleInput {...props} />);

        const inputEl = utils.getByLabelText("search");
        const labelEl = utils.getByText(label);

        return {
            label: labelEl,
            input: inputEl as HTMLInputElement,
            ...utils,
        };
    };

    it("must call setText on value change", () => {
        const { input } = build();
        const value = faker.random.word();

        fireEvent.change(input, { target: { value } });

        expect(props.setText).toBeCalledWith(value);
        expect(input.value).toBe(props.text);
    });

    it("must have text binded to the HTML Input value ", () => {
        const { input } = build();
        expect(input.value).toBe(props.text);
    });

    it("must have label content equal to label props.", () => {
        const { label } = build();
        expect(label.textContent).toBe(props.label);
    });
});
