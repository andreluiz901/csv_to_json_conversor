import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import multer from "multer";
import { convertCsvBufferToJsonFile } from "./json-conversor.js";

const app = express();

const upload = multer({
  fileFilter: function fileFilter(req, file, cb) {
    file.mimetype === "text/csv" ? cb(null, true) : cb(null, false);
  },
});

app.post("/upload", upload.single("csvFile"), async (req, res) => {
  if (req.file === undefined)
    return res.status(200).json({ message: "Tipo de Arquivo inválido" });

  const file = req.file;

  const dataJson = await convertCsvBufferToJsonFile(file.buffer);
  return res.status(200).json({ message: "ok", data: dataJson });
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
