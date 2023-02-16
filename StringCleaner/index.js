// JavaScript source code
var fileName = "";

function cleanFile() {
    var inputFile = document.getElementById("inputFile").files[0];

    fileName = inputFile.name;
    var fileType = fileName.substring(fileName.length-3);

    if(fileType == "csv") {
        let reader =  new FileReader();
        reader.readAsText(inputFile);
        reader.onload = csvloadhandler;
    }
    else if(fileType == "txt") {
        let reader =  new FileReader();
        reader.readAsText(inputFile);
        reader.onload = txtloadhandler;
    }
}


// CSV FILE FUNCTIONS
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

function csvloadhandler(event) {
    let csv = event.target.result;
    download_csv_file(csv);
}

function csvToArray (csvFile) {
    var rows = csvFile.split("\n");

    return rows.map(function (row) {
    	return row.split(",");
    });
};
  
function download_csv_file(csvFileData) {
    //convert to 2d array
    var csvFileArray = csvToArray(csvFileData);

    //clean the data
    var cleanFileData = arrayStringCleaner(csvFileArray);

    //define the base string
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
    hiddenElement.download = fileName.substring(0,fileName.length-4) + "-Clean.csv";

    hiddenElement.click();
}


//TXT FILE FUNCTIONS
function txtloadhandler(event) {
    let txt = event.target.result;
    download_txt_file(txt);
}
  
function download_txt_file(txtFileData) {
    //clean the data
    var cleanFileData = stringCleaner(txtFileData);

    // Write clean data to new doc
    document.write(cleanFileData);
   
    var hiddenElement = document.createElement('a');

    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(cleanFileData);
    hiddenElement.target = '_blank';    
    hiddenElement.download = fileName.substring(0,fileName.length-4) + "-Clean.txt";

    hiddenElement.click();
}


// TEXT FUNCTIONS
function cleanText() {
    var str = document.getElementById("inputText").value;
    document.getElementById("output").innerHTML = stringCleaner(str);
}


// BASE CLEANER
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