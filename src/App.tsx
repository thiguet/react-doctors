import React from 'react';
import ReactDOM from 'react-dom';
import { getData } from './DOMScanner/doctorsTable';
import { getFilterData } from './DOMScanner/filter';
import { DoctorsRows } from './components/DoctorRow/DoctorRow';
import mergeDoctorData from './services/Init/mergeDoctorData';

// HTML DOM Scan -> Gets data from the HTML received.
const selectOptions = getFilterData();
const doctorsData = getData();

mergeDoctorData();

// API conciliate -> Merge DOM and API data.

// ReactDOM.render(React.createElement(SearchInput), document.getElementById('searchContainer'));
// ReactDOM.render(React.createElement(Select, { options }), document.getElementById('searchContainer'));
ReactDOM.render(React.createElement(DoctorsRows, { rows: doctorsData }), document.getElementById('doctors'));
