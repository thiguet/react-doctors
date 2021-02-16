export const getFilterData = (): string[] =>
    [...document.querySelectorAll("#availabilityFilterSelect option")].map(
        (option) => option.innerHTML
    );
