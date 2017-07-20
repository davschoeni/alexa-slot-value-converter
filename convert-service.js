module.exports = {

    // Takes data in the form of a comma separated list and transforms it to JSON.
    // The JSON object can be used for Alexa custom slot values.
    // It also filters duplicate values.
    convertToJSON: function (fileName, input) {
        var inputArray = input.split(',');
        var stringValues = []; // to check for duplicates
        var slotValues = []; // result
        for(var i=0; i<inputArray.length; i++) {
            var stringValue = inputArray[i].trim().toLowerCase();
            var slotValue = {
                id: '',
                name: {
                    value: stringValue,
                    synonyms: []
                }
            };
            // Check for duplicates.
            if(!this.arrayContainsString(stringValues, stringValue)) {
                stringValues.push(stringValue);
                slotValues.push(slotValue);
            }
        }

        var jsonObject = {
            name: fileName,
            values: slotValues
        };

        return JSON.stringify(jsonObject);
    },


    // Helper that returns a boolean indicating if a given array contains a given string
    arrayContainsString: function(myArray, myString) {
        return myArray.indexOf(myString) > -1;
    }

};