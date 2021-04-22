function saveBookmark(e) {
    let webName = document.querySelector('#websiteName').value;
    let webURL = document.querySelector('#websiteURL').value;
    if (!webName || !webURL) {
        alert('Please fill in the form')
        return false;
    }
    let bookmark ={
        name: webName,
        url: webURL
    }
    if (localStorage.getItem("bookmarks") === null) {
        let bookmarks = [];

        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        console.log(bookmarks);
    }
    else{
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    document.querySelector('#bookmarkForm').reset();
    fetchBookmark();
    e.preventDefault();
}

document.querySelector('#bookmarkForm').addEventListener('submit', saveBookmark);


//Fetch Bookmark
function fetchBookmark() {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    let bookmarkResult = document.querySelector('#bookmarkResult');
    bookmarkResult.innerHTML = '';
    for (let index = 0; index < bookmarks.length; index++) {
        let name = bookmarks[index].name;
        let url = bookmarks[index].url;

        bookmarkResult.innerHTML +=`
        <div class="mt-4 card">
            <h5 class="card-header">${name}</h5>
                <div class="card-body">
                    <a class="btn btn-primary" target="_blank" href="${url}">Visit</a>
                    <a onclick="deleteBookmark('${url}')" class="btn btn-danger" href="#">Delete</a>
            </div>
        </div>
        `

        
    }
}

// Delete Bookmark
function deleteBookmark(url) {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    for (let index = 0; index < bookmarks.length; index++) {
        if (bookmarks[index].url == url) {
            bookmarks.splice(index,1);
        }
        
    }

    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    fetchBookmark();
}