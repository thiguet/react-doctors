import React from "react";
import { fireEvent, render } from "@testing-library/react";
import DoctorSelectFilter from "../../src/components/DoctorSelectFilter/DoctorSelectFilter";
import * as ReactRedux from "react-redux";
import { getFakeStringArray } from "../utils/stringFactory";

describe("DoctorSelectFilter", () => {
    const build = () => {
        const dispatchFn = jest
            .spyOn(ReactRedux, "useDispatch")
            .mockImplementation(() => jest.fn);

        const options = getFakeStringArray();

        const utils = render(<DoctorSelectFilter options={options} />);

        return {
            dispatchFn,
            options,
            ...utils,
        };
    };

    it("must have passed the right props to Simple Select Component", () => {
        jest.doMock("../../src/components/SimpleSelect/SimpleSelect", () =>
            jest.fn(() => null)
        );

        import("../../src/components/SimpleSelect/SimpleSelect")
            .then((SimpleSelect) => {
                const { options } = build();
                expect(SimpleSelect).toHaveBeenCalledWith(
                    {
                        ariaLabel: "Doctors Filter",
                        options,
                        ...((SimpleSelect as unknown) as jest.Mock).mock
                            .calls[0][0],
                    },
                    {}
                );
            })
            .catch((e) => {
                throw e;
            });
    });

    it("must dispatch action on input change", () => {
        const { dispatchFn, options, getByTestId } = build();
        jest.dontMock("../../src/components/SimpleInput/SimpleInput");
        import("../../src/components/SimpleInput/SimpleInput")
            .then(() => {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                fireEvent.change(getByTestId("select")!, {
                    target: { value: options[0] },
                });

                expect(dispatchFn).toHaveBeenCalled();
            })
            .catch((e) => {
                throw e;
            });
    });
});
