export const getFilterData = () =>
    [...document.querySelectorAll('#availabilityFilterSelect option')].map(option => option.innerHTML);
