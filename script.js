

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



function change9() {
  if (hour === 08);
  document.getElementById('nine').classList.add('textAreaPresent');
  document.getElementById('ten').classList.add('textAreaFuture');
  document.getElementById('eleven').classList.add('textAreaFuture');
  document.getElementById('twelve').classList.add('textAreaFuture');
  document.getElementById('one').classList.add('textAreaFuture');
  document.getElementById('two').classList.add('textAreaFuture');
  document.getElementById('three').classList.add('textAreaFuture');
  document.getElementById('four').classList.add('textAreaFuture');
  document.getElementById('five').classList.add('textAreaFuture');
  document.getElementById('six').classList.add('textAreaFuture');
}
change9()

function change10() {
  if (hour === 10) 
  document.getElementById('nine').classList.add('textAreaPast');
  document.getElementById('ten').classList.add('textAreaPresent');
  document.getElementById('eleven').classList.add('textAreaFuture');
  document.getElementById('twelve').classList.add('textAreaFuture');
  document.getElementById('one').classList.add('textAreaFuture');
  document.getElementById('two').classList.add('textAreaFuture');
  document.getElementById('three').classList.add('textAreaFuture');
  document.getElementById('four').classList.add('textAreaFuture');
  document.getElementById('five').classList.add('textAreaFuture');
  document.getElementById('six').classList.add('textAreaFuture');
}
change10()




// function changebknd() {
//   if (hour === 09)
// } else { 
//   (hour === 08)
// }
// changebknd()
