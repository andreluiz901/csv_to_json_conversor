import fs from "node:fs/promises";

export async function convertCsvFileToJson(csvFilePath) {
  const buffer = await fs.readFile(csvFilePath);

  const dataCsv = Buffer.from(buffer).toString().split("\n");

  const titles = dataCsv[0].split(",");
  dataCsv.shift();

  const dataJson = dataCsv.map((current) => {
    const values = current.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/g);
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
    const values = current.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/g);
    const newObject = titles.reduce((objAcc, objCurrent, objIndex) => {
      objAcc[objCurrent] = values[objIndex];

      return objAcc;
    }, {});

    return newObject;
  });

  return dataJson;
}
