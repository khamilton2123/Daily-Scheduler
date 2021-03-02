
var detailInput = $('.form-control');
var details = [];


$('.form-control').css({ 'background-color': 'green',});
$('.input-group-text').css({'margin-left':'10%'});
$('button').css({'margin-right':'10%'});




$("#0700").keydown(function(){
  $("#0700").css("background-color", "orange");
});

$("#7btn").click(function(){
  event.preventDefault();
  var detailText = (detailInput.value);
  if (detailText === "") {
    return;
  }
 
  details.push(detailText);
  detailInput.value = "";
 
  storeDetails();
 
});

function storeDetails() {
  localStorage.setItem("details", JSON.stringify(details));
}

console.log(details);




///Current Day

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));