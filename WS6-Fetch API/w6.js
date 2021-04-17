const people = "https://randomuser.me/api/?results=100";

fetch(people)
    .then(function(response){
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log("error : " + err);
    });

function appendData(data) {
    var mainContainer = document.getElementById("mydata");

    for(var i = 0 ; i < data.results.length; i++){
        var table = document.createElement("table");
        table.innerHTML = `
            <tr> 
                <td>
                    <img src="${data.results[i].picture.medium}">
                </td>
                <td>
                    First name:${data.results[i].name.title} ${data.results[i].name.first}
                    <br>
                    Last name: ${data.results[i].name.last}s
                </td>
            </tr>
        `;
        mainContainer.appendChild(table);
    }
}