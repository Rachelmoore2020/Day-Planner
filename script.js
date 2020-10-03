

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
function change9() {
  if (hour === 09);
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
change9();
// function change10() {
//   if (hour === 10) 
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
// change10();
// function change11() {
//   if (hour === 11) 
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
// }
change11();
function change12() {
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
change12();
function change1() {
  if (hour === 13) 
  document.getElementById('nine').classList.add('textAreaPast');
  document.getElementById('ten').classList.add('textAreaPast');
  document.getElementById('eleven').classList.add('textAreaPast');
  document.getElementById('twelve').classList.add('textAreaPast');
  document.getElementById('one').classList.add('textAreaPresent');
  document.getElementById('two').classList.add('textAreaFuture');
  document.getElementById('three').classList.add('textAreaFuture');
  document.getElementById('four').classList.add('textAreaFuture');
  document.getElementById('five').classList.add('textAreaFuture');
  document.getElementById('six').classList.add('textAreaFuture');
}
change1();
function change2() {
  if (hour === 14) 
  document.getElementById('nine').classList.add('textAreaPast');
  document.getElementById('ten').classList.add('textAreaPast');
  document.getElementById('eleven').classList.add('textAreaPast');
  document.getElementById('twelve').classList.add('textAreaPast');
  document.getElementById('one').classList.add('textAreaPast');
  document.getElementById('two').classList.add('textAreaPresent');
  document.getElementById('three').classList.add('textAreaFuture');
  document.getElementById('four').classList.add('textAreaFuture');
  document.getElementById('five').classList.add('textAreaFuture');
  document.getElementById('six').classList.add('textAreaFuture');
}
change2();
function change3() {
  if (hour === 15) 
  document.getElementById('nine').classList.add('textAreaPast');
  document.getElementById('ten').classList.add('textAreaPast');
  document.getElementById('eleven').classList.add('textAreaPast');
  document.getElementById('twelve').classList.add('textAreaPast');
  document.getElementById('one').classList.add('textAreaPast');
  document.getElementById('two').classList.add('textAreaPast');
  document.getElementById('three').classList.add('textAreaPresent');
  document.getElementById('four').classList.add('textAreaFuture');
  document.getElementById('five').classList.add('textAreaFuture');
  document.getElementById('six').classList.add('textAreaFuture');
}
change3();
function change4() {
  if (hour === 16) 
  document.getElementById('nine').classList.add('textAreaPast');
  document.getElementById('ten').classList.add('textAreaPast');
  document.getElementById('eleven').classList.add('textAreaPast');
  document.getElementById('twelve').classList.add('textAreaPast');
  document.getElementById('one').classList.add('textAreaPast');
  document.getElementById('two').classList.add('textAreaPast');
  document.getElementById('three').classList.add('textAreaPast');
  document.getElementById('four').classList.add('textAreaPresent');
  document.getElementById('five').classList.add('textAreaFuture');
  document.getElementById('six').classList.add('textAreaFuture');
}
change4();
function change5() {
  if (hour === 17) 
  document.getElementById('nine').classList.add('textAreaPast');
  document.getElementById('ten').classList.add('textAreaPast');
  document.getElementById('eleven').classList.add('textAreaPast');
  document.getElementById('twelve').classList.add('textAreaPast');
  document.getElementById('one').classList.add('textAreaPast');
  document.getElementById('two').classList.add('textAreaPast');
  document.getElementById('three').classList.add('textAreaPast');
  document.getElementById('four').classList.add('textAreaPast');
  document.getElementById('five').classList.add('textAreaPresent');
  document.getElementById('six').classList.add('textAreaFuture');
}
change5();
function change6() {
  if (hour === 18) 
  document.getElementById('nine').classList.add('textAreaPast');
  document.getElementById('ten').classList.add('textAreaPast');
  document.getElementById('eleven').classList.add('textAreaPast');
  document.getElementById('twelve').classList.add('textAreaPast');
  document.getElementById('one').classList.add('textAreaPast');
  document.getElementById('two').classList.add('textAreaPast');
  document.getElementById('three').classList.add('textAreaPast');
  document.getElementById('four').classList.add('textAreaPast');
  document.getElementById('five').classList.add('textAreaPast');
  document.getElementById('six').classList.add('textAreaPresent');
}
change6();


