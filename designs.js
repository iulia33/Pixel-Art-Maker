/*global $*/
$(document).ready(function(){

$("#submit").on('click',function(e){
  e.preventDefault();
  makeGrid()
});

function makeGrid(){
  $("table").empty();
  var heightLength = $("#input_height").val();
  var widthLength = $("#input_width").val();

  for(var i= 0; i < heightLength; i++){
    $("table").append("<tr></tr>");
    for(var j = 0; j < widthLength; j++){
        $("table").children().last().append("<td></td>");
    }
  }
}

$("table").on("click", "td", function(){
  var colorPicker = $("#colorPicker").val();
  if ($(this).attr("bgcolor") != ""){
    $(this).attr("bgcolor","");
  }else{
    $(this).attr("bgcolor", colorPicker );
  }
});
});
