/*global $*/
$(document).ready(function(){

$("#submit").on('click',function(e){
  e.preventDefault();
  makeGrid()
});

function makeGrid(){
  $("table").empty();
  const heightLength = $("#input_height").val();
  const widthLength = $("#input_width").val();

  for(let i= 0; i < heightLength; i++){
    $("table").append("<tr></tr>");
    for(let j = 0; j < widthLength; j++){
        $("table").children().last().append("<td></td>");
    }
  }
}

$("table").on("click", "td", function(){
  $("#clear").removeClass("clear");
  const colorPicker = $("#colorPicker").val();
  if ((typeof $(this).attr("bgcolor")==="undefined")||($(this).attr("bgcolor") === "")){
    $(this).attr("bgcolor",colorPicker);
  }else{
    $(this).attr("bgcolor", "" );
  }
  $("#clear").on("click", clearTable);
});

function clearTable(){
  $("td").removeAttr("bgcolor");
}

});
