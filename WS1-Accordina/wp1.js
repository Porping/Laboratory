var accitem = document.getElementsByClassName("accrodianitem");
var accheader = document.getElementsByClassName("header");

for(var i = 0; i < accheader.length; i++){
    accheader[i].addEventListener("click",toggleitem);
}


function toggleitem() {
    var itemclass = this.parentNode.className;
    console.log(itemclass);//Check Header
    for(var i = 0; i < accitem.length; i++){
        accitem[i].className = "accrodianitem close";
    }//You can see only one content

    if(itemclass == "accrodianitem close"){
        this.parentNode.className = "accrodianitem open";
    }
}