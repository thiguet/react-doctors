import React from 'react';
import ReactDOM from 'react-dom';
import { getData } from './services/DOMScanner/doctorsTable';
import { getFilterData } from './services/DOMScanner/filter';

import mergeDoctorData from './services/Init/mergeDoctorData';

import HOCDoctorFilter from './components/DoctorFilter/HOCDoctorFilter';
import DoctorRowsWithFilter from './components/DoctorRow/DoctorRowsWithFilter';

import { Provider } from 'react-redux';
import store from './redux/store';

// HTML DOM Scan -> Gets data from the HTML received.
const selectOptions = getFilterData();
const doctorsData = getData();

// API conciliate -> Merge DOM and API data.
mergeDoctorData();

// ReactDOM.render(
//     React.createElement(DoctorFilter, { options: selectOptions }),
//     document.getElementById('searchContainer')
// );

const renderReactComponents = () => {
    ReactDOM.render(
        <Provider store={store}>
            <HOCDoctorFilter options={selectOptions} />
        </Provider>,
        document.querySelectorAll('.column.column-20:nth-child(2)')[0]
    );
    ReactDOM.render(
        <Provider store={store}>
            <DoctorRowsWithFilter />
        </Provider>,
        document.getElementById('doctors')
    );
};

renderReactComponents();
