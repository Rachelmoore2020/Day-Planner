

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

// Put a line here that asks if localStorage is empty
// var storedInput = localStorage.getItem(input).value


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