// JavaScript source code

var token = "Bearer eyJraWQiOiJrZzplMGRlNmFiZC1jY2NlLTQyYzEtYjFlNS05ZDkwNjdhMmRkMGMiLCJhbGciOiJSUzI1NiJ9.eyJTZXJ2aWNlQWNjb3VudCI6IkVBUk5FU1RfREVNI3ZrZm8xUW9fVWJhV252TGtVWXJWWW51NXN1Q2lSYlplRkREem5oVTN0ZjREY3JoWUFGZFFJeUMtX282M2VXME9zUGxSeVc5RDJQMElhSHRocmFwUE9nIiwiYXVkIjoiaHR0cHM6Ly9taW5nbGUtaW9uYXBpLmluZm9yY2xvdWRzdWl0ZS5jb20iLCJUZW5hbnQiOiJFQVJORVNUX0RFTSIsIm5iZiI6MTY4NjA1NjgzNywiRW5mb3JjZVNjb3Blc0ZvckNsaWVudCI6IjAiLCJncmFudF9pZCI6IjE2Y2FmOTI5LTdlYzMtNDhiNC1iYWI3LWUxMzVjZWVmNzgyMiIsImlzcyI6Imh0dHBzOi8vbWluZ2xlLXNzby5pbmZvcmNsb3Vkc3VpdGUuY29tL2luZm9yc3RzIiwiSW5mb3JTVFNJc3N1ZWRUeXBlIjoiQVMiLCJleHAiOjE2ODYwNjQwMzcsImlhdCI6MTY4NjA1NjgzNywiY2xpZW50X2lkIjoiRUFSTkVTVF9ERU1-VGVaOGtzWUJqSml1Z24yUHRaWkFlU1pzTWQ5NDAxaTRJUTN4cEt0Yi02NCIsImp0aSI6IjdhZTM3ZWEyLTcxNjItNGQxZC04ZjFkLTAzMjdhYmE2Y2Q4YSJ9.OorP2Jm8vcapdBRqHMyewgj4bb3RAehUHEJ4ESqOg6kRaVWBj7f0W1p1O-rFE8dkGTw1sSvXEt1pFUD3pxRHu5VMbzFoyV2GqjCcfPN_K1QRIzVY2XJBRW4a1IgidRh8uGjuNuuuR8M47h7vwqs07O12UJJx0tohjvkJiQbYxsgiiC3ijxHnv44l5RijhRanVQeoe_6FzG_q4A-UCXcZ6JtiYHbuBCf4X8XZ5TXu4st_ORVP3bzk2sYHqJtNoycRBgmbvqpgJBohkZvF6Z4sabcVvNe8eITyrrhXJa5EmGT0sCUmrxNzVX2VAiFJi4pRD76bFLJpeWxssbIvLIORyA";

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
  myHeaders.append("Authorization", "Bearer eyJraWQiOiJrZzplMGRlNmFiZC1jY2NlLTQyYzEtYjFlNS05ZDkwNjdhMmRkMGMiLCJhbGciOiJSUzI1NiJ9.eyJTZXJ2aWNlQWNjb3VudCI6IkVBUk5FU1RfREVNI3ZrZm8xUW9fVWJhV252TGtVWXJWWW51NXN1Q2lSYlplRkREem5oVTN0ZjREY3JoWUFGZFFJeUMtX282M2VXME9zUGxSeVc5RDJQMElhSHRocmFwUE9nIiwiYXVkIjoiaHR0cHM6Ly9taW5nbGUtaW9uYXBpLmluZm9yY2xvdWRzdWl0ZS5jb20iLCJUZW5hbnQiOiJFQVJORVNUX0RFTSIsIm5iZiI6MTY4NjEzOTQ3OSwiRW5mb3JjZVNjb3Blc0ZvckNsaWVudCI6IjAiLCJncmFudF9pZCI6ImUyYTViZjdlLTMxMDMtNGExNC04YWQwLTk4Yjk3MDNmNDBlZiIsImlzcyI6Imh0dHBzOi8vbWluZ2xlLXNzby5pbmZvcmNsb3Vkc3VpdGUuY29tL2luZm9yc3RzIiwiSW5mb3JTVFNJc3N1ZWRUeXBlIjoiQVMiLCJleHAiOjE2ODYxNDY2NzksImlhdCI6MTY4NjEzOTQ3OSwiY2xpZW50X2lkIjoiRUFSTkVTVF9ERU1-VGVaOGtzWUJqSml1Z24yUHRaWkFlU1pzTWQ5NDAxaTRJUTN4cEt0Yi02NCIsImp0aSI6ImU2NDcyMmNmLTdiYmUtNGUyOC04YTc3LTA5YmU0NmMwN2NlZSJ9.EXEBAxF3_YBb_b5SLhsLVjob5R8sNV0G9LQeOjpBdkCnSb0Ytxc_HlpJnXy76Eg8Vb5PWevGABgMemMJYnRCb8J9Qdqp5YpXOmBFmusTZEXBF__LjcbrQbCWNFh0jB4oj7Mju7z3Eb71NVFAhTcW4koqvXR-lOK9uSxoQzoYsUAqendMB7fDmWcxyxcHGNvP9QBNn_Js6sQoKPb6jZFY_3gwo-fdhQnl4XdEGbiTLcTeUjjH_nxJwVa9HXdCaxKGgg2pKeyavswjQTJsD4wGkzK4Ftq_F0hOFCUZdxEz6g2l_qMnAY4ccB35Lmyte5uyTVpcFh7zmVAywYcxn51ieA");

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
    //mode: "no-cors",
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