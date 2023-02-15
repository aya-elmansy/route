var siteNameInput = document.getElementById("sName");
var siteUrlInput = document.getElementById("sUrl");
var tableRow = document.getElementById("tableBody");
var nabtn = document.getElementById("nabtn");
var Ubtn = document.getElementById("Ubtn");

var bookArr = [];
if (localStorage.getItem("books") != null) {
    bookArr = JSON.parse(localStorage.getItem("books"));
    display(bookArr);
}

function addBook() {
    var item = {
        sName: siteNameInput.value,
        sUrl: siteUrlInput.value
    }
    bookArr.push(item);
    localStorage.setItem("books", JSON.stringify(bookArr));
    clearForm();
    display(bookArr);
    check();
}

function clearForm() {
    siteNameInput.value = "";
    siteUrlInput.value = "";

}


function display(Arr) {
    var term = "";
    for (var i = 0; i < Arr.length; i++) {
        term += `<tr>
                    <td>${i}</td>
                    <td>${Arr[i].sName}</td>
                    <td>${Arr[i].sUrl}</td>
                    <td><button class="btn btn-outline-warning" onclick =deleteBook(${i}) >Delete</button></td>
                    <td><button class="btn btn-outline-danger" onclick= VisitUrl(${i}) >Visit</button></td>
                </tr>`
    }
    tableRow.innerHTML = term;
}


function check() {
    if (siteNameInput.value === "" && siteUrlInput.value === "") {
        Ubtn.classList.replace("d-none", "d-block");
        nabtn.classList.replace("d-none", "d-block");
    } else if (siteNameInput.value === "") {
        nabtn.classList.replace("d-none", "d-block");
    } else if (siteUrlInput.value === "") {
        Ubtn.classList.replace("d-none", "d-block");
    }

}
var globalIndex;
function deleteBook(index) {
    globalIndex = index;
    bookArr.splice([index], 1);
    display(bookArr);
    localStorage.setItem("books", JSON.stringify(bookArr));
}

function VisitUrl(globalIndex) {
    window.location = (bookArr[globalIndex].sUrl);
}