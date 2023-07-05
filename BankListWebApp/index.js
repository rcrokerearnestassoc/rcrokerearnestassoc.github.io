// JavaScript source code

function search() {
  var cono = 5001;

  setupDivs();

  searchForBankInfo(cono);
}

function fillGrid(json, cono) {
  const data = json.ttblcrsb;

  var grid = document.getElementById("bankGrid");
  grid.style.display = "grid";

  var title = document.querySelector(".bankGrid-title");
  title.style.display = "block";

  title.textContent = `Bank Info for Company Number ${cono}`;

  var header = grid.querySelector(".bankGrid-header");
  var headerText = `
    <div>Name</div>
    <div>Balance</div>
  `;
  header.innerHTML = headerText;

  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      var item = data[key];
      var row = document.createElement("div");
      row.className = "bankGrid-row";
      var balanceFormated = item.curbookbal.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
      var rowText = `
        <div>${item.name} (${item.bankno})</div>
        <div>${balanceFormated}</div>
      `;
      row.innerHTML = rowText;
      grid.appendChild(row);
    }
  }

  var title = document.querySelector(".loader");
  title.style.display = "none";
}

function setupDivs() {
  var title = document.querySelector(".loader");
  title.style.display = "block";

  var grid = document.getElementById("bankGrid");
  grid.style.display = "none";

  var title = document.querySelector(".bankGrid-title");
  title.style.display = "none";

  var elements = document.getElementsByClassName('bankGrid-row');
     for (var i = 0; i < elements.length; i++) {
       elements[i].style.display = "none";
   }

}

function searchForBankInfo(cono) {
  const lambdaUrl = "https://wtdtxdhht2.execute-api.us-east-1.amazonaws.com/default/FetchWhereTest";

  fetch(lambdaUrl)
  .then(response => response.json())
  .then(result => fillGrid(result, cono))
  .catch(error => console.log('error', error));
}