let ul = document.getElementById("listItem");
let trendingBtn = document.getElementById("trending");
let randomBtn = document.getElementById("random");
let searchGifInput = document.getElementById("searchGifInput");
let form = document.querySelector("form");
let searchGif = document.getElementById("searchGif");

let apikey = "Your API";//You can get API at Gipphy 

function LetSearch(event) {
    event.preventDefault();
    ul.innerHTML = "";
    console.log(searchGifInput.value);
    var searchValue = searchGifInput.value;
    let giphyApi = `https://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=${apikey}&limit=10`;

    fetch(giphyApi)
        .then(respond => respond.json())
        .then(json => {
            for(var i = 0; i < json.data.length; i++){
                var data = json.data[i].images.original.url;
                var img = document.createElement("img");
                img.src = data;
                var li = document.createElement("li");
                li.appendChild(img);
                ul.appendChild(li);
                document.body.appendChild(ul);
                searchGifInput.value = "";
            }
        })
        .catch(err => console.log(err));
}
function trendinggif(event) {
    event.preventDefault();
    ul.innerHTML = "";
    let giphyApi = `https://api.giphy.com/v1/gifs/search?q=trending&api_key=${apikey}&limit=10`;

    fetch(giphyApi)
        .then(respond => respond.json())
        .then(json => {
            for(var i = 0; i < json.data.length; i++){
                var data = json.data[i].images.original.url;
                var img = document.createElement("img");
                img.src = data;
                var li = document.createElement("li");
                li.appendChild(img);
                ul.appendChild(li);
                document.body.appendChild(ul);
                searchGifInput.value = "";
            }
        })
        .catch(err => console.log(err));
}
function randomgif(event) {
    event.preventDefault();
    ul.innerHTML = "";
    console.log(searchGifInput.value);
    var searchValue = searchGifInput.value;
    let giphyApi = `https://api.giphy.com/v1/gifs/random?api_key=${apikey}&limit=10`;
    for(var i = 0 ; i < 10;i++){
        fetch(giphyApi)
            .then(respond => respond.json())
            .then(json => {
                    var data = json.data.images.original.url;
                    var img = document.createElement("img");
                    img.src = data;
                    var li = document.createElement("li");
                    li.appendChild(img);
                    ul.appendChild(li);
                    document.body.appendChild(ul);
                    searchGifInput.value = "";
                
            })
            .catch(err => console.log(err));
    }
}

form.addEventListener("submit", LetSearch);
randomBtn.addEventListener("click",randomgif);
trendingBtn.addEventListener("click",trendinggif);

