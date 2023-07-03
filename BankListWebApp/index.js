// JavaScript source code

function search() {
  //var cono = document.getElementById("inputField").value;
  var cono = 5001;

  console.log("selected cono: " + cono);

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
  let logindata = {
    "operator": "RC01",
    headers: {
      'Content-Type': 'application/json'
    },
    "cono": parseInt(cono)
  };

  let loginrequestOptions = {
    method: 'POST',
    body: logindata
  };

  let requestdata = {
    "operator": "RC01",
    "endpoint": "FetchWhere",
    "suite": "sxefetch",
    "method": "Post",
    "request": {
      "CompanyNumber": parseInt(cono),
      "Operator": "RC01",
      "TableName": "crsb",
      "WhereClause": `cono = ${cono}`,
      "BatchSize": 0,
      "RestartRowID": ""
    }
  };

  let requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestdata)
  };

  const loginUrl = 'http://localhost:3000/login';
  const requestUrl = 'http://localhost:3000/request';
  const lambdaUrl = "https://wtdtxdhht2.execute-api.us-east-1.amazonaws.com/default/FetchWhereTest";

  // fetch(loginUrl, loginrequestOptions)
  //   .then(response => response.json())
  //   .then(result => {
  //     console.log(result);

  //     console.log(requestOptions);

  //     fetch(requestUrl, requestOptions)
  //       .then(response2 => response2.json())
  //       .then(result2 => fillGrid(result2, cono))
  //       .catch(error2 => console.log('error', error2));
  //   })
  //   .catch(error => console.log('error', error));  

  fetch(lambdaUrl)
  .then(response => response.json())
  .then(result => fillGrid(result, cono))
  .catch(error => console.log('error', error));

  // fetch("https://mingle-ionapi.inforcloudsuite.com/EARNEST_DEM/SX/rest/serviceinterface/proxy/FetchWhere", {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${token}`
  //   },
  //   body: JSON.stringify(data),
  //   mode: "no-cors"
  // })
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //     return response.json();
  //   })
  //   .then(data => {
  //     // Handle the response data
  //     bankInfo = data;
  //     console.log(data);
  //   })
  //   .catch(error => {
  //     // Handle any errors
  //     console.error('Error: ', error);
  //   });

  // try {
  //   const response = await fetch("https://mingle-ionapi.inforcloudsuite.com/EARNEST_DEM/SX/rest/serviceinterface/proxy/FetchWhere", {
  //     method: "POST",
  //     headers: {
  //       Authentication: 'Bearer ' + token
  //     },
  //     body: JSON.stringify(data),
  //     mode: "no-cors"
  //   });

  //   //const result = await response.json();
  //   console.log("Success:", response);
  //   bankInfo = response;
  // } catch (error) {
  //   console.error("Error:", error);
  //   bankInfo = null;
  // }

  //return "Bank Info from Company Number: " + bankInfo;
}