// Request data from server
var requestData = new XMLHttpRequest();
requestData.open('GET', 'https://jsonplaceholder.typicode.com/todos');
requestData.onload = function () {
    var jsonObj = JSON.parse(requestData.responseText);
    // Check in console if connection is working
    console.log(jsonObj[2].title);

    // Create HTML structure
    var newMain = document.createElement('main');
    var newPara = document.createElement('p');
    var numOfWindows = 12; // Set # of ToDo's
    var newDiv = new Array();
    // Loop divs connected to numOfWindows
    for (var i = 0; i < numOfWindows; i++) {
        newDiv[i] = document.createElement('div');
        newDiv[i].innerHTML = (
            '<p id="paraId">Id: ' + jsonObj[i].id + '</p>' +
            '<p>Title: ' + jsonObj[i].title) + '</p>';
        // If/Else ToDo is completed
        if (jsonObj[i].completed == true) {
            newDiv[i].id = 'true';
        } else {
            newDiv[i].id = 'false';
        };
        // Make <div> child of <main>
        newMain.appendChild(newDiv[i]);
    };
    // Make <main> child of <body>
    document.getElementsByTagName('body')[0].appendChild(newMain);
};

requestData.send();