import React from "react";
import { fireEvent, render } from "@testing-library/react";
import DoctorTextFilter, {
    doctorsReducer,
} from "../../src/components/DoctorTextFilter/DoctorTextFilter";
import * as ReactRedux from "react-redux";
import faker from "faker";
import SimpleInput from "../../src/components/SimpleInput/SimpleInput";

describe("DoctorTextFilter", () => {
    const build = () => {
        const text = faker.random.word();

        const dispatchFn = jest
            .spyOn(ReactRedux, "useDispatch")
            .mockImplementation(() => jest.fn);
        jest.spyOn(ReactRedux, "useSelector").mockImplementation(() => text);

        const utils = render(<DoctorTextFilter />);

        return {
            dispatchFn,
            text,
            ...utils,
        };
    };

    it("must have passed the right props to Simple Input Component", () => {
        const { text } = build();
        jest.doMock("../../src/components/SimpleInput/SimpleInput", () =>
            jest.fn(() => null)
        );
        import("../../src/components/SimpleInput/SimpleInput").then(
            (SimpleInput) => {
                expect(SimpleInput).toHaveBeenCalledWith(
                    {
                        label: "Filter by:",
                        text,
                        ...((SimpleInput as unknown) as jest.Mock).mock
                            .calls[0][0],
                    },
                    {}
                );
            }
        );
    });

    it("must dispatch action on input change", () => {
        const newText = faker.random.words();
        jest.dontMock("../../src/components/SimpleInput/SimpleInput");
        import("../../src/components/SimpleInput/SimpleInput").then(() => {
            const { dispatchFn, getByTestId } = build();
            fireEvent.input(getByTestId("input"), {
                target: { value: newText },
            });

            expect(dispatchFn).toHaveBeenCalled();
        });
    });

    it("must return textFilter from state", () => {
        build();
        const text = faker.random.words();
        const textFilter = doctorsReducer({
            doctorsReducer: {
                textFilter: text,
                selectFilter: "All Doctors",
                doctors: [],
            },
        });
        expect(textFilter).toBe(text);
    });
});
