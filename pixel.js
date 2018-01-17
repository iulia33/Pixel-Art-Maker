window.addEventListener("load", function(){

var submitBtn = document.getElementById("submit");
var table = document.getElementById("pixel_canvas");

submitBtn.addEventListener("click", function(e){
  e.preventDefault();
  makeGrid();
});

function makeGrid(){
  var heightInp = document.getElementById("input_height");
  var widthInp = document.getElementById("input_width");
  var heightLength = heightInp.value;
  var widthLength = widthInp.value;

  for (var i = 0; i< heightLength; i++){
    var row = document.createElement("tr");
    for (var j = 0; j < widthLength; j++){
      var col = document.createElement("td");
      row.appendChild(col);
    }
    table.appendChild(row);
  }
}

table.addEventListener("click", function(e){
  var colorPicker = document.getElementById("colorPicker");
  var colorPickerVal = colorPicker.value;
  var celClicked = e.target;
  if (celClicked.style.backgroundColor != ""){
    celClicked.style.backgroundColor = "";
  }else{
    celClicked.style.backgroundColor = colorPickerVal;
  }
});

})
