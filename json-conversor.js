import fs from "node:fs/promises";
import "dotenv/config";

const regex = /,(?![ ])|,(?=,)/g;

export async function convertCsvFileToJson(csvFilePath) {
  const buffer = await fs.readFile(csvFilePath);

  const dataCsv = Buffer.from(buffer).toString().split("\n");

  const titles = dataCsv[0].split(",");
  dataCsv.shift();

  const dataJson = dataCsv.map((current) => {
    const values = current.split(regex);
    const newObject = titles.reduce((objAcc, objCurrent, objIndex) => {
      objAcc[objCurrent] = values[objIndex];

      return objAcc;
    }, {});

    return newObject;
  });

  return dataJson;
}

export async function convertCsvBufferToJsonFile(fileBuffer) {
  const dataCsv = fileBuffer.toString().split("\n");

  const titles = dataCsv[0].split(",");
  dataCsv.shift();

  const dataJson = dataCsv.map((current) => {
    const values = current.split(regex);
    const newObject = titles.reduce((objAcc, objCurrent, objIndex) => {
      objAcc[objCurrent] = values[objIndex];

      return objAcc;
    }, {});

    return newObject;
  });

  return dataJson;
}

//
//
//
//
// For tests, this path below leads to bugs or unnexpected responses and should  be avoided
//
//
//
//

export async function convertCsvFileToJsonFromString(csvString) {
  const dataCsv = csvString.split("\n");
  console.log(dataCsv);
  const titles = dataCsv[0].split(",");
  dataCsv.shift();

  const dataJson = dataCsv.map((current) => {
    const values = current.split(regex);
    const newObject = titles.reduce((objAcc, objCurrent, objIndex) => {
      objAcc[objCurrent] = values[objIndex];

      return objAcc;
    }, {});

    return newObject;
  });

  return dataJson;
}

export async function convertCsvBufferToJsonFileTEST(fileBuffer) {
  if (fileBuffer.slice(0, 3) == Buffer.from(",,,")) return "slice pego";

  const dataCsv = fileBuffer.toString().split("\n");

  const titles = dataCsv[0].split(",");
  dataCsv.shift();

  const dataJson = dataCsv.map((current) => {
    const values = current.split(regex);
    const newObject = titles.reduce((objAcc, objCurrent, objIndex) => {
      objAcc[objCurrent] = values[objIndex];

      return objAcc;
    }, {});

    return newObject;
  });

  return dataJson;
}

export async function convertCsvFileToJsonTEST(csvFilePath) {
  const buffer = await fs.readFile(csvFilePath);

  const dataCsv = Buffer.from(buffer).toString().split("\n");

  const titles = dataCsv[0].split(",");
  dataCsv.shift();

  const dataJson = dataCsv.map((current) => {
    const values = current.split(regex);

    const newObject = titles.reduce((objAcc, objCurrent, objIndex) => {
      objAcc[objCurrent] = values[objIndex];

      return objAcc;
    }, {});

    return newObject;
  });

  return dataJson;
}

export async function convertCsvFileToJsonTEST_v2(csvFilePath) {
  const buffer = await fs.readFile(csvFilePath);

  const dataCsv = Buffer.from(buffer).toString().split("\n");

  const titles = dataCsv[0].split(",");
  dataCsv.shift();
  const csvMap = new Map();
  let index = 1;
  dataCsv.map((row) => {
    const rowValues = row.split(regex);
    const props = Object(titles);
    console.log("props", props);
    csvMap.set(index, { ...rowValues });
    index++;
  });

  console.log("csvMap", csvMap);

  // const dataJson = dataCsv.map((current) => {
  //   const values = current.split(regex);

  //   const newObject = titles.reduce((objAcc, objCurrent, objIndex) => {
  //     objAcc[objCurrent] = values[objIndex];

  //     return objAcc;
  //   }, {});

  //   return newObject;
  // });

  // return dataJson;
}
