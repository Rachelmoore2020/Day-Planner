

var date = moment().format("MMM Do YYYY");
var hour = moment().format("HH");
console.log("date", date);
console.log("hour", hour);

function postDate() {
  var postDate= document.getElementById("agenda");
  postDate.textContent = date;
}
postDate()

// var userInput = document.getElementsByClass("textArea");
// function saveToLocal() {
//   console.log("userInput", userInput)

//   }
  // $('#box3').on('click', saveToLocal()

  // var hourBox1 = getElementById("nine");
  // var hourbox2 = getElementById("ten");

  console.log("hourBox1", hourBox1);

function changebknd() {
  if (hour === 06)document.getElementById("ten").style.color = "green";
}
changebknd()
