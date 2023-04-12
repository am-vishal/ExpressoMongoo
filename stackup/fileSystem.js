const fs = require("fs");

module.exports.fileSystem = fs.readFile("./file.txt", "utf-8", (err, file) => {
  const sample = "added from writeFile";
  fs.writeFile("./file.txt", `${file}\n${sample}`, "utf-8", (err) => {
    console.log("File has been written");
    console.log(file, "currFile");
  });
});
