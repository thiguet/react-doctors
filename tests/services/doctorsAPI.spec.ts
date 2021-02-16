import { getFakeDBDoctor, getFakeDBDoctors } from "#/utils/doctorsFactory";
import * as doctorsAPI from "@/services/doctorsAPI";

describe("Doctors API", () => {
    const build = () => {
        const fakeDoctor = getFakeDBDoctor();
        const fakeDoctors = getFakeDBDoctors();

        return {
            fakeDoctors,
            fakeDoctor,
        };
    };
    it("must retrieve doctors from the API.", async () => {
        const { fakeDoctors } = build();
        const spy = jest.spyOn(doctorsAPI.instance, "get").mockResolvedValue({
            data: fakeDoctors,
        });

        const result = await doctorsAPI.getDoctors();
        expect(spy).toBeCalled();
        expect(result).toBe(fakeDoctors);
    });
    it("must update a doctor.", async () => {
        const { fakeDoctor } = build();

        const spy = jest.spyOn(doctorsAPI.instance, "put").mockResolvedValue({
            data: fakeDoctor,
        });

        await doctorsAPI.updateDoctor(fakeDoctor);

        expect(spy).toBeCalledWith(
            `${doctorsAPI.url}/${fakeDoctor.upin}`,
            fakeDoctor
        );
    });

    it("must update doctors.", async () => {
        const { fakeDoctors } = build();

        jest.spyOn(doctorsAPI.instance, "put").mockResolvedValue({
            data: fakeDoctors,
        });

        const spy = jest.spyOn(doctorsAPI, "updateDoctor");

        await doctorsAPI.updateDoctors(fakeDoctors);

        expect(spy).toBeCalledTimes(fakeDoctors.length);

        for (let i = 0; i < fakeDoctors.length; i++) {
            expect(spy).toHaveBeenNthCalledWith(
                i + 1,
                fakeDoctors[i],
                i,
                fakeDoctors
            );
        }
    });
    it("must update doctor availability.", async () => {
        const { fakeDoctor } = build();

        const spy = jest.spyOn(doctorsAPI.instance, "patch").mockResolvedValue({
            data: fakeDoctor,
        });

        await doctorsAPI.updateDoctorAvailability(
            fakeDoctor.upin,
            fakeDoctor.available
        );

        expect(spy).toBeCalledWith(`${doctorsAPI.url}/${fakeDoctor.upin}`, {
            available: fakeDoctor.available,
        });
    });
});
