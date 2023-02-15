// JavaScript source code

function cleanFile() {
    var inputFile = document.getElementById("inputFile").files[0];

    let reader =  new FileReader();
    reader.readAsText(inputFile);
    reader.onload = loadhandler;
}

function loadhandler(event) {
    let csv = event.target.result;
    download_csv_file(csv);
}

function processData(csv) {
    console.log(csv);
}

function arrayStringCleaner(array) {
    var newArray = [];

    for(let i = 0; i < array.length; i++) {
        var newRow = [];

        for(let j = 0; j < array[i].length; j++) {
            newRow.push(stringCleaner(array[i][j]));
        }

        newArray.push(newRow);
    }

    return newArray;
}

function csvToArray (csvFile) {
    var rows = csvFile.split("\n");

    return rows.map(function (row) {
    	return row.split(",");
    });
};

function stringCleaner(str) {
    let cleanStr = "";

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        let ascVal = str.charCodeAt(i);

        if ((ascVal > 31 && ascVal < 127) || (ascVal > 191 && ascVal < 256)) {
            cleanStr += char;
        }
    }

    return cleanStr;
}
  
function download_csv_file(csvFileData) {
    //convert to 2d array
    var csvFileArray = csvToArray(csvFileData);

    //clean the data
    var cleanFileData = arrayStringCleaner(csvFileArray);

    //define the heading for each row of the data
    var csv = '';
    
    //merge the data with CSV
    cleanFileData.forEach(function(row) {
            csv += row.join(',');
            csv += "\n";
    });

    document.write(csv);
   
    var hiddenElement = document.createElement('a');

    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';    
    hiddenElement.download = 'Output.csv';

    hiddenElement.click();
}