let el, i;

let data = [
    {firstname: "Harry", lastname: "Potter"},
    {firstname: "Tom", lastname: "Jerry"},
    {firstname: "Pat", lastname: "Stan"},
    {firstname: "Peter", lastname: "Jackson"}
]


let panel = document.querySelector('#panel')            ;


function clearForm() {
    document.querySelector('#fname').value="";
    document.querySelector('#lname').value="";
}



function renderItem() {
    panel.textContent = "";
    data.forEach(val => {
        el = document.createElement("option");
        el.innerText = `${val.firstname}, ${val.lastname}`;
        panel.append(el);
    })
}


renderItem();

function create() {
    let fn = document.querySelector('#fname').value;
    let ln = document.querySelector('#lname').value;
    data = [...data, {firstname: fn , lastname: ln}];
    clearForm();
    console.log(data);
    renderItem();
}



function panelClick() {
    i = panel.selectedIndex;
    document.querySelector('#fname').value = data[i].firstname;
    document.querySelector('#lname').value = data[i].lastname;

}


function update() {
    data[i].firstname =  document.querySelector('#fname').value;
    data[i].lastname =  document.querySelector('#lname').value;
    renderItem();
}


function deleteItem() {
    data.splice(i, 1);// 1 is delete  0 is not delete but ""
    renderItem();
}