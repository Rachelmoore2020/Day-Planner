

var date = moment().format("MMM Do YYYY");
var hour = moment().format("HH");
console.log("date", date);
console.log("hour", hour);

function postDate() {
  var postDate= document.getElementById("agenda");
  postDate.textContent = date;
}
postDate()

// Saving user input to local storage
// var userInput = document.getElementsByClass("textArea");
// function saveToLocal() {
//   console.log("userInput", userInput)

//   }
  // $('#box3').on('click', saveToLocal()


  // var midBox = document.getElementsByClassName('textArea');
  // console.log(midBox)
 
  // why does this only return the last one?
  // var midBoxEl = midBox[[1], [2], [3]];
  // console.log("midBoxel", midBoxEl);

  // midBox.forEach()


// change background colors depending on time of day
// function changebknd() {
//   if (hour === 09) {
//   document.getElementById('nine').classList.add('textAreaPresent');
//   document.getElementById('ten').classList.add('textAreaFuture');
//   document.getElementById('eleven').classList.add('textAreaFuture');
//   document.getElementById('twelve').classList.add('textAreaFuture');
//   document.getElementById('one').classList.add('textAreaFuture');
//   document.getElementById('two').classList.add('textAreaFuture');
//   document.getElementById('three').classList.add('textAreaFuture');
//   document.getElementById('four').classList.add('textAreaFuture');
//   document.getElementById('five').classList.add('textAreaFuture');
//   document.getElementById('six').classList.add('textAreaFuture');
// } else if (hour === 10) {
//   document.getElementById('nine').classList.add('textAreaPast');
//   document.getElementById('ten').classList.add('textAreaPresent');
//   document.getElementById('eleven').classList.add('textAreaFuture');
//   document.getElementById('twelve').classList.add('textAreaFuture');
//   document.getElementById('one').classList.add('textAreaFuture');
//   document.getElementById('two').classList.add('textAreaFuture');
//   document.getElementById('three').classList.add('textAreaFuture');
//   document.getElementById('four').classList.add('textAreaFuture');
//   document.getElementById('five').classList.add('textAreaFuture');
//   document.getElementById('six').classList.add('textAreaFuture');
// } else if (hour === 11) {
//   document.getElementById('nine').classList.add('textAreaPast');
//   document.getElementById('ten').classList.add('textAreaPast');
//   document.getElementById('eleven').classList.add('textAreaPresent');
//   document.getElementById('twelve').classList.add('textAreaFuture');
//   document.getElementById('one').classList.add('textAreaFuture');
//   document.getElementById('two').classList.add('textAreaFuture');
//   document.getElementById('three').classList.add('textAreaFuture');
//   document.getElementById('four').classList.add('textAreaFuture');
//   document.getElementById('five').classList.add('textAreaFuture');
//   document.getElementById('six').classList.add('textAreaFuture');
// } else if (hour === 12) {
//   document.getElementById('nine').classList.add('textAreaPast');
//   document.getElementById('ten').classList.add('textAreaPast');
//   document.getElementById('eleven').classList.add('textAreaPast');
//   document.getElementById('twelve').classList.add('textAreaPresent');
//   document.getElementById('one').classList.add('textAreaFuture');
//   document.getElementById('two').classList.add('textAreaFuture');
//   document.getElementById('three').classList.add('textAreaFuture');
//   document.getElementById('four').classList.add('textAreaFuture');
//   document.getElementById('five').classList.add('textAreaFuture');
//   document.getElementById('six').classList.add('textAreaFuture');
// } else if (hour === 13) {
//   document.getElementById('nine').classList.add('textAreaPast');
//   document.getElementById('ten').classList.add('textAreaPast');
//   document.getElementById('eleven').classList.add('textAreaPast');
//   document.getElementById('twelve').classList.add('textAreaPast');
//   document.getElementById('one').classList.add('textAreaPresent');
//   document.getElementById('two').classList.add('textAreaFuture');
//   document.getElementById('three').classList.add('textAreaFuture');
//   document.getElementById('four').classList.add('textAreaFuture');
//   document.getElementById('five').classList.add('textAreaFuture');
//   document.getElementById('six').classList.add('textAreaFuture');
//   } else if (hour === 14) {
//   document.getElementById('nine').classList.add('textAreaPast');
//   document.getElementById('ten').classList.add('textAreaPast');
//   document.getElementById('eleven').classList.add('textAreaPast');
//   document.getElementById('twelve').classList.add('textAreaPast');
//   document.getElementById('one').classList.add('textAreaPast');
//   document.getElementById('two').classList.add('textAreaPresent');
//   document.getElementById('three').classList.add('textAreaFuture');
//   document.getElementById('four').classList.add('textAreaFuture');
//   document.getElementById('five').classList.add('textAreaFuture');
//   document.getElementById('six').classList.add('textAreaFuture');
// } else if (hour === 15) {
//   document.getElementById('nine').classList.add('textAreaPast');
//   document.getElementById('ten').classList.add('textAreaPast');
//   document.getElementById('eleven').classList.add('textAreaPast');
//   document.getElementById('twelve').classList.add('textAreaPast');
//   document.getElementById('one').classList.add('textAreaPast');
//   document.getElementById('two').classList.add('textAreaPast');
//   document.getElementById('three').classList.add('textAreaPresent');
//   document.getElementById('four').classList.add('textAreaFuture');
//   document.getElementById('five').classList.add('textAreaFuture');
//   document.getElementById('six').classList.add('textAreaFuture');
// } else if (hour === 16) {
//   document.getElementById('nine').classList.add('textAreaPast');
//   document.getElementById('ten').classList.add('textAreaPast');
//   document.getElementById('eleven').classList.add('textAreaPast');
//   document.getElementById('twelve').classList.add('textAreaPast');
//   document.getElementById('one').classList.add('textAreaPast');
//   document.getElementById('two').classList.add('textAreaPast');
//   document.getElementById('three').classList.add('textAreaPast');
//   document.getElementById('four').classList.add('textAreaPresent');
//   document.getElementById('five').classList.add('textAreaFuture');
//   document.getElementById('six').classList.add('textAreaFuture');
// } else if (hour === 17) {
//   document.getElementById('nine').classList.add('textAreaPast');
//   document.getElementById('ten').classList.add('textAreaPast');
//   document.getElementById('eleven').classList.add('textAreaPast');
//   document.getElementById('twelve').classList.add('textAreaPast');
//   document.getElementById('one').classList.add('textAreaPast');
//   document.getElementById('two').classList.add('textAreaPast');
//   document.getElementById('three').classList.add('textAreaPast');
//   document.getElementById('four').classList.add('textAreaPast');
//   document.getElementById('five').classList.add('textAreaPresent');
//   document.getElementById('six').classList.add('textAreaFuture');
// } else if (hour === 18) {
//   document.getElementById('nine').classList.add('textAreaPast');
//   document.getElementById('ten').classList.add('textAreaPast');
//   document.getElementById('eleven').classList.add('textAreaPast');
//   document.getElementById('twelve').classList.add('textAreaPast');
//   document.getElementById('one').classList.add('textAreaPast');
//   document.getElementById('two').classList.add('textAreaPast');
//   document.getElementById('three').classList.add('textAreaPast');
//   document.getElementById('four').classList.add('textAreaPast');
//   document.getElementById('five').classList.add('textAreaPast');
//   document.getElementById('six').classList.add('textAreaPresent');
// }
// }
// console.log(hour)
// changebknd();


function changebknd() {
    if (hour === 12) 
    document.getElementById('nine').classList.add('textAreaPast');
    document.getElementById('ten').classList.add('textAreaPast');
    document.getElementById('eleven').classList.add('textAreaPast');
    document.getElementById('twelve').classList.add('textAreaPresent');
    document.getElementById('one').classList.add('textAreaFuture');
    document.getElementById('two').classList.add('textAreaFuture');
    document.getElementById('three').classList.add('textAreaFuture');
    document.getElementById('four').classList.add('textAreaFuture');
    document.getElementById('five').classList.add('textAreaFuture');
    document.getElementById('six').classList.add('textAreaFuture');
  } 
  
  // else if (hour === 13) {
  //   document.getElementById('nine').classList.add('textAreaPast');
  //   document.getElementById('ten').classList.add('textAreaPresent');
  //   document.getElementById('eleven').classList.add('textAreaFuture');
  //   document.getElementById('twelve').classList.add('textAreaFuture');
  //   document.getElementById('one').classList.add('textAreaFuture');
  //   document.getElementById('two').classList.add('textAreaFuture');
  //   document.getElementById('three').classList.add('textAreaFuture');
  //   document.getElementById('four').classList.add('textAreaFuture');
  //   document.getElementById('five').classList.add('textAreaFuture');
  //   document.getElementById('six').classList.add('textAreaFuture');
  // }
  changebknd()


// code for box 9
document.getElementById("nine").innerHTML = JSON.parse(localStorage.getItem("input9"))

function getAgendaItems() {
  var storedTodos = JSON.parse(localStorage.getItem("input9"));
  localStorage.getItem("input9")
}
getAgendaItems();

function agendaItem9() {
var input9 = document.getElementById("nine").value;
console.log(input9);
localStorage.setItem("input9", JSON.stringify(input9));
}
// code for box 10
document.getElementById("ten").innerHTML = JSON.parse(localStorage.getItem("input"))

function getAgendaItems() {
  // Get stored items from localStorage
  var storedTodos = JSON.parse(localStorage.getItem("input"));
  localStorage.getItem("input")
}
getAgendaItems();

function agendaItem() {
var input = document.getElementById("ten").value;
console.log(input);
localStorage.setItem("input", JSON.stringify(input));
}

// code for box 11
document.getElementById("eleven").innerHTML = JSON.parse(localStorage.getItem("input11"))

function getAgendaItems() {
  var storedTodos = JSON.parse(localStorage.getItem("input11"));
  localStorage.getItem("input11")
}
getAgendaItems();

function agendaItem11() {
var input11 = document.getElementById("eleven").value;
console.log(input11);
localStorage.setItem("input11", JSON.stringify(input11));
}

// code for box 12
document.getElementById("twelve").innerHTML = JSON.parse(localStorage.getItem("input12"))

function getAgendaItems() {
  var storedTodos = JSON.parse(localStorage.getItem("input12"));
  localStorage.getItem("input12")
}
getAgendaItems();

function agendaItem12() {
var input12 = document.getElementById("twelve").value;
console.log(input12);
localStorage.setItem("input12", JSON.stringify(input12));
}
// code for box 13
document.getElementById("one").innerHTML = JSON.parse(localStorage.getItem("input3"))

function getAgendaItems() {
  var storedTodos = JSON.parse(localStorage.getItem("input3"));
  localStorage.getItem("input3")
}
getAgendaItems();

function agendaItem3() {
var input3 = document.getElementById("one").value;
console.log(input3);
localStorage.setItem("input3", JSON.stringify(input3));
}
// code for box 14
document.getElementById("two").innerHTML = JSON.parse(localStorage.getItem("input4"))

function getAgendaItems() {
  var storedTodos = JSON.parse(localStorage.getItem("input11"));
  localStorage.getItem("input11")
}
getAgendaItems();

function agendaItem4() {
var input4 = document.getElementById("two").value;
console.log(input4);
localStorage.setItem("input4", JSON.stringify(input4));
}
// code for box 15
document.getElementById("three").innerHTML = JSON.parse(localStorage.getItem("input5"))

function getAgendaItems() {
  var storedTodos = JSON.parse(localStorage.getItem("input5"));
  localStorage.getItem("input5")
}
getAgendaItems();

function agendaItem5() {
var input5 = document.getElementById("three").value;
console.log(input5);
localStorage.setItem("input5", JSON.stringify(input5));
}
// code for box 16
document.getElementById("four").innerHTML = JSON.parse(localStorage.getItem("input6"))

function getAgendaItems() {
  var storedTodos = JSON.parse(localStorage.getItem("input6"));
  localStorage.getItem("input6")
}
getAgendaItems();

function agendaItem6() {
var input6 = document.getElementById("four").value;
console.log(input6);
localStorage.setItem("input6", JSON.stringify(input6));
}
// code for box 17
document.getElementById("five").innerHTML = JSON.parse(localStorage.getItem("input7"))

function getAgendaItems() {
  var storedTodos = JSON.parse(localStorage.getItem("input7"));
  localStorage.getItem("input7")
}
getAgendaItems();

function agendaItem7() {
var input7 = document.getElementById("five").value;
console.log(input7);
localStorage.setItem("input7", JSON.stringify(input7));
}
// code for box 18
document.getElementById("six").innerHTML = JSON.parse(localStorage.getItem("input8"))

function getAgendaItems() {
  var storedTodos = JSON.parse(localStorage.getItem("input8"));
  localStorage.getItem("input8")
}
getAgendaItems();

function agendaItem8() {
var input11 = document.getElementById("six").value;
console.log(input8);
localStorage.setItem("input8", JSON.stringify(input8));
}