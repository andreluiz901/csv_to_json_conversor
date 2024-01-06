import { convertCsvBufferToJsonFileTEST } from "./json-conversor.js";
import { convertCsvFileToJsonTEST } from "./json-conversor.js";

// Attack use case
const attackString = Buffer.from(",,,,,, \n".repeat(60000));

console.log(await convertCsvBufferToJsonFileTEST(attackString));

// Good use case
const goodString = "./examples/mini.csv";

console.log(await convertCsvFileToJsonTEST(goodString));
