import React from "react";
import ReactDOM from "react-dom";

import axe from "@axe-core/react";

import { getFilterData } from "./services/DOMScanner/filter";

import mergeDoctorData from "./services/Init/mergeDoctorData";

import DoctorSelectFilter from "./components/DoctorSelectFilter/DoctorSelectFilter";
import DoctorTextFilter from "./components/DoctorTextFilter/DoctorTextFilter";
import DoctorRowsWithFilter from "./components/DoctorRowsWithFilter/DoctorRowsWithFilter";

import { Provider } from "react-redux";
import store from "./redux/store";

// HTML DOM Scan -> Gets data from the HTML received.
const selectOptions = getFilterData();

if (process.env.NODE_ENV !== "production") {
    axe(React, ReactDOM, 1000);
}

// API conciliate -> Merge DOM and API data and save it to DB on the first run.
if (localStorage.getItem("HAS_MERGED_DATA_BEFORE") !== "Y") {
    mergeDoctorData(); // This merge and persist the HTML Data to the DB.
    localStorage.setItem("HAS_MERGED_DATA_BEFORE", "Y");
}

const renderReactComponents = () => {
    ReactDOM.render(
        <Provider store={store}>
            <DoctorSelectFilter options={selectOptions} />
        </Provider>,
        document.querySelectorAll(".column.column-20:nth-child(2)")[0]
    );
    ReactDOM.render(
        <Provider store={store}>
            <DoctorRowsWithFilter />
        </Provider>,
        document.getElementById("doctors")
    );
    ReactDOM.render(
        <Provider store={store}>
            <DoctorTextFilter />
        </Provider>,
        document.getElementById("searchContainer")
    );
    ReactDOM.render(
        <h1>Doctors</h1>,
        document.querySelectorAll(".row:nth-child(1)")[0]
    );
};

renderReactComponents();
