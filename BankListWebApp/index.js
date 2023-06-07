// JavaScript source code

var token = "Bearer ";

function search() {
  var cono = document.getElementById("inputField").value;

  console.log("selected cono: " + cono);

  searchForBankInfo(cono);
  //document.getElementById("output").innerHTML = searchForBankInfo(cono);
  //fillGrid(cono);
}

function fillGrid(cono) {
  const data = {
    1: {
      "name": "Wells Fargo",
      "balance": 10000
    },
    2: {
      "name": "Ameritrade",
      "balance": 112300
    },
    3: {
      "name": "Bank of America",
      "balance": 84512
    },
    10: {
      "name": "Ameritrade",
      "balance": 112300
    },
    265: {
      "name": "Ameritrade",
      "balance": 112300
    },
    21: {
      "name": "Ameritrade",
      "balance": 112300
    },
    22: {
      "name": "Ameritrade",
      "balance": 112300
    },
    23: {
      "name": "Ameritrade",
      "balance": 112300
    },
    212: {
      "name": "Ameritrade",
      "balance": 112300
    },
    2125: {
      "name": "Ameritrade",
      "balance": 112300
    },
    2127: {
      "name": "Ameritrade",
      "balance": 11512300
    }
  };

  var grid = document.getElementById("bankGrid");

  var title = document.querySelector(".bankGrid-title");
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
      var balanceFormated = item.balance.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
      var rowText = `
        <div>${item.name} (${key})</div>
        <div>${balanceFormated}</div>
      `;
      row.innerHTML = rowText;
      grid.appendChild(row);
    }
  }
}

function searchForBankInfo(cono) {
  // var data = {
  //   CompanyNumber: cono,
  //   Operator: "RC01",
  //   TableName: "crsb",
  //   WhereClause: "cono = " + cono,
  //   BatchSize: 0,
  //   RestartRowID: ""
  // };

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", token);

  var data = JSON.stringify({
    "CompanyNumber": 5001,
    "Operator": "RC01",
    "TableName": "crsb",
    "WhereClause": "cono = 5001",
    "BatchSize": 0,
    "RestartRowID": ""
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: data,
    redirect: 'follow'
  };

  var bankInfo = null;

  const apiUrl = 'https://mingle-ionapi.inforcloudsuite.com/EARNEST_DEM/SX/rest/serviceinterface/proxy/FetchWhere';
  // const corsProxyUrl = 'https://api.allorigins.win/get?url=';

  fetch(apiUrl, requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
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

  return "Bank Info from Company Number: " + bankInfo;
}