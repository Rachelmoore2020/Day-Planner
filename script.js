

var date = moment().format("MMM Do YYYY");
var hour = parseInt(moment().format("HH"));

function postDate() {
  var postDate= document.getElementById("agenda");
  postDate.textContent = date;
}
postDate()

var textAreaEl = document.getElementsByClassName("textArea")

for(let item of textAreaEl) {
    console.log(item)
 var id = item.getAttribute("id")
 if (id == hour) {
     item.classList.add('textAreaPresent')
    
 }
 else if (id < hour) {
    item.classList.add('textAreaPast')
 }
else {
    item.classList.add('textAreaFuture')
}
}

// code for box 9
document.getElementById("9").innerHTML = JSON.parse(localStorage.getItem("input9"))

function getAgendaItems() {
  var storedTodos = JSON.parse(localStorage.getItem("input9"));
  localStorage.getItem("input9")
}
getAgendaItems();

function agendaItem9() {
var input9 = document.getElementById("9").value;
console.log(input9);
localStorage.setItem("input9", JSON.stringify(input9));
}
// code for box 10
document.getElementById("10").innerHTML = JSON.parse(localStorage.getItem("input"))

function getAgendaItems() {
  // Get stored items from localStorage
  var storedTodos = JSON.parse(localStorage.getItem("input"));
  localStorage.getItem("input")
}
getAgendaItems();

function agendaItem() {
var input = document.getElementById("10").value;
console.log(input);
localStorage.setItem("input", JSON.stringify(input));
}

// code for box 11
document.getElementById("11").innerHTML = JSON.parse(localStorage.getItem("input11"))

function getAgendaItems() {
  var storedTodos = JSON.parse(localStorage.getItem("input11"));
  localStorage.getItem("input11")
}
getAgendaItems();

function agendaItem11() {
var input11 = document.getElementById("11").value;
console.log(input11);
localStorage.setItem("input11", JSON.stringify(input11));
}

// code for box 12
document.getElementById("12").innerHTML = JSON.parse(localStorage.getItem("input12"))

function getAgendaItems() {
  var storedTodos = JSON.parse(localStorage.getItem("input12"));
  localStorage.getItem("input12")
}
getAgendaItems();

function agendaItem12() {
var input12 = document.getElementById("12").value;
console.log(input12);
localStorage.setItem("input12", JSON.stringify(input12));
}
// code for box 13
document.getElementById("13").innerHTML = JSON.parse(localStorage.getItem("input3"))

function getAgendaItems() {
  var storedTodos = JSON.parse(localStorage.getItem("input3"));
  localStorage.getItem("input3")
}
getAgendaItems();

function agendaItem3() {
var input3 = document.getElementById("13").value;
console.log(input3);
localStorage.setItem("input3", JSON.stringify(input3));
}
// code for box 14
document.getElementById("14").innerHTML = JSON.parse(localStorage.getItem("input4"))

function getAgendaItems() {
  var storedTodos = JSON.parse(localStorage.getItem("input11"));
  localStorage.getItem("input11")
}
getAgendaItems();

function agendaItem4() {
var input4 = document.getElementById("14").value;
console.log(input4);
localStorage.setItem("input4", JSON.stringify(input4));
}
// code for box 15
document.getElementById("15").innerHTML = JSON.parse(localStorage.getItem("input5"))

function getAgendaItems() {
  var storedTodos = JSON.parse(localStorage.getItem("input5"));
  localStorage.getItem("input5")
}
getAgendaItems();

function agendaItem5() {
var input5 = document.getElementById("15").value;
console.log(input5);
localStorage.setItem("input5", JSON.stringify(input5));
}
// code for box 16
document.getElementById("16").innerHTML = JSON.parse(localStorage.getItem("input6"))

function getAgendaItems() {
  var storedTodos = JSON.parse(localStorage.getItem("input6"));
  localStorage.getItem("input6")
}
getAgendaItems();

function agendaItem6() {
var input6 = document.getElementById("16").value;
console.log(input6);
localStorage.setItem("input6", JSON.stringify(input6));
}
// code for box 17
document.getElementById("17").innerHTML = JSON.parse(localStorage.getItem("input7"))

function getAgendaItems() {
  var storedTodos = JSON.parse(localStorage.getItem("input7"));
  localStorage.getItem("input7")
}
getAgendaItems();

function agendaItem7() {
var input7 = document.getElementById("17").value;
console.log(input7);
localStorage.setItem("input7", JSON.stringify(input7));
}
// code for box 18
document.getElementById("18").innerHTML = JSON.parse(localStorage.getItem("input8"));

function getAgendaItems() {
  var storedTodos = JSON.parse(localStorage.getItem("input8"));
  localStorage.getItem("input8")
}
getAgendaItems();

function agendaItem8() {
var input8 = document.getElementById("18").value;
console.log(input8);
localStorage.setItem("input8", JSON.stringify(input8));
}
