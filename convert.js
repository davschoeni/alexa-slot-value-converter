const FS = require('fs');
const ConvertService = require('./convert-service');

var INPUT_DIR = "./input/";
var OUTPUT_DIR = "./output/";
var OUTPUT_EXTENSION = "_output";
var FILE_ENCODING = "utf8";

// Saves content to a file in the OUTPUT_DIR
writeFile = function (fileName, content) {
    var filePath = OUTPUT_DIR + fileName + OUTPUT_EXTENSION;
    FS.writeFile(filePath, content, function(err) {
        if(err) {
            console.log(err);
        }
        console.log("Saved " + filePath);
    });
};


// Reads, converts and writes an input file with the name 'fileName'
convertFile = function (fileName) {
    FS.readFile(INPUT_DIR + fileName, FILE_ENCODING, function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        writeFile(fileName, data);
    });
};


// Iterate over all files in the INPUT_DIR and convert them
FS.readdirSync(INPUT_DIR).forEach(file => {
    convertFile(file);
});



// Read files from
/*fs.readFile('./input/names', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(data);
});


/*var arrayContainsString = function(myArray, myString) {
    return myArray.indexOf(myString) > -1;
};


var getSlotValues = function(valueArray) {
    var stringValues = []
    var slotValues = [];
    for(var i=0; i<valueArray.length; i++) {
        var stringValue = valueArray[i].trim().toLowerCase();
        var slotValue = {
            "id": "",
            "name": {
                "value": stringValue,
                "synonyms": []
            }
        };
        if(!arrayContainsString(stringValues, stringValue)) {
            stringValues.push(stringValue);
            slotValues.push(slotValue);
            console.log(slotValue);
            console.log(",");
        }
    }

    return slotValues;
};
*/