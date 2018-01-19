/*global $*/
$(document).ready(function(){
//when submit is clicked create a table
$("#submit").on('click',function(e){
  e.preventDefault();
  makeGrid()
});

//given the user's input, create a grid
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
  //when a cell is clicked a clear button appears
  $("#clear").removeClass("clear");
  //chose color for the design
  const colorPicker = $("#colorPicker").val();
  //check if the cell has a background color, and if it does, remove it, else add it
  if ((typeof $(this).attr("bgcolor")==="undefined")||($(this).attr("bgcolor") === "")){
    $(this).attr("bgcolor",colorPicker);
  }else{
    $(this).attr("bgcolor", "" );
  }
  //when clear button is clicked, clear all the cells
  $("#clear").on("click", clearTable);
});

function clearTable(){
  $("td").removeAttr("bgcolor");
}

});
