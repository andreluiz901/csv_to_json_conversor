# JSON-Converter

## How to Run:

- install packages with `npm run install`
- create a `.env` file at `./` (root directory)
- insert a free port at `PORT` variable
- start with `npm run dev`

## Usage:

- send a file using a `POST` method at `localhost:PORT/upload` with httpie or postman or insomina
  - be sure that is the same `PORT` at your `.env`
- Send a csv file with `csvFile` field name using `muliprt/form-data`
  - if you use httpie, i should use a line command like:
    - `http -f POST localhost:3000/upload name='csvFile' csvFile@'./examples/mini.csv'`
    - at httpie its important that prefix of `@` is equal of the name field, ensure use `csvFile`
- You should receive a json formatted at the http response, inside of the `data` propertie
