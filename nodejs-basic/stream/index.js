const fs = require("fs");

const readableStream = fs.createReadStream(__dirname + "/input.txt", {
  highWaterMark: 15,
});

const writableStream = fs.createWriteStream(__dirname + "/output.txt");

readableStream.on("data", (text) => {
  try {
    writableStream.write(text + "\n");
  } catch (error) {
    console.log(error);
  }
});

readableStream.on("end", () => {
  console.log("Output.txt berhasil di buat");
  writableStream.end();
});
