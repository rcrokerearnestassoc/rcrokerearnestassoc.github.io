// JavaScript source code

function cleanText() {
    var str = document.getElementById("inputText").value;
    document.getElementById("output").innerHTML = stringCleanser(str);
}

function stringCleanser(str) {
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