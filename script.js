

var date = moment().format("MMM Do YYYY");
console.log("date", date);

function postDate() {
  var postDate= document.getElementById("box2");
  postDate.textContent = date;
  
}
postDate()