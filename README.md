# React Doctors

React Doctors is a simple React With Typescript project that is a simple doctors schedule.

## Features

- Mark a Doctor as Available
- Filter Doctors by Availability
- Filter Doctors by UPIN (Unique Physician Identification Number) or by name.

## Installation

React Doctors requires [Node.js](https://nodejs.org/) v10+ to run.

### Dev

For dev purposes, install the dependencies and devDependencies and start both json-server and webpack servers:

```sh
cd react-doctors
npm i
npm start
```

### Prod

Use the docker image / docker-compose for production:

```sh
cd react-doctors
docker-compose -d up
```
