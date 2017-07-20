const FS = require('fs');
const ConvertService = require('./convert-service');

var INPUT_DIR = './input/';
var OUTPUT_DIR = './output/';
var OUTPUT_EXTENSION = '_output.json';
var FILE_ENCODING = 'utf8';

// Saves content to a file in the OUTPUT_DIR
writeFile = function (fileName, content) {
    var filePath = OUTPUT_DIR + fileName + OUTPUT_EXTENSION;
    FS.writeFile(filePath, content, function(err) {
        if(err) {
            console.log(err);
        }
        console.log('Saved ' + filePath);
    });
};


// Reads, converts and writes an input file with the name 'fileName'
convertFile = function (fileName) {
    FS.readFile(INPUT_DIR + fileName, FILE_ENCODING, function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        var content = ConvertService.convertToJSON(fileName, data);
        writeFile(fileName, content);
    });
};


// Iterate over all files in the INPUT_DIR and convert them
FS.readdirSync(INPUT_DIR).forEach(file => {
    convertFile(file);
});