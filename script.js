

var date = moment().format("MMM Do YYYY");
console.log("date", date);

function postDate() {
  var postDate= document.getElementById("box2");
  postDate.textContent = date;
  
}
postDate()

var userInput = document.getElementsByClass("textArea");
function saveToLocal() {
  console.log("userInput", userInput)

  }
  // $('#box3').on('click', saveToLocal()

  // var hourBox = ['.one']

//   $(document).ready(function(){
//     var hourTextBox = Array();
//     $('.item').each(function(index,`obj`){
//        res.push(obj.id);
//     });
//     console.log(res);
// });