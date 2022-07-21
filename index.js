console.log("Welcome")
//init constructor
function addbook(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//initialize display function
function Display() { }

//adding display prototype
Display.prototype.add = function (book) {
    console.log("Adding Values")
    let tableBody = document.getElementById("tableBody");
    let html = `<tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                </tr>`;
    tableBody.innerHTML += html;
}

//adding clear prototype
Display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}

//adding validate prototype
Display.prototype.validate = function(book){
    if (book.name.length == 0 || book.author.length == 0) {
        alert("Please fill all the fields");
        return false;
    } else {
        return true;
    }   
}

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let bookName = document.getElementById("bookName").value;
    let bookAuthor = document.getElementById("authorName").value;
    let commers = document.getElementById("commers");
    let computerScience = document.getElementById("computerScience");
    let others = document.getElementById("others");
    let type;
    if (commers.checked) {
        type = commers.value;
    } else if (computerScience.checked) {
        type = computerScience.value;
    } else if (others.checked) {
        type = others.value;
    }
    let book = new addbook(bookName, bookAuthor, type);
    const display = new Display();
    if (display.validate(book)){
    display.add(book);
    display.clear();
    } else {
        console.log("Invalid Book");
    }
});

