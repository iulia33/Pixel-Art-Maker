window.addEventListener("load", function(){

const submitBtn = document.getElementById("submit");
const table = document.getElementById("pixel_canvas");

submitBtn.addEventListener("click", function(e){
  e.preventDefault();
  makeGrid();
});

function makeGrid(){
  const heightInp = document.getElementById("input_height");
  const widthInp = document.getElementById("input_width");
  const heightLength = heightInp.value;
  const widthLength = widthInp.value;

  for (let i = 0; i< heightLength; i++){
    const row = document.createElement("tr");
    for (let j = 0; j < widthLength; j++){
      const col = document.createElement("td");
      row.appendChild(col);
    }
    table.appendChild(row);
  }
}

table.addEventListener("click", function(e){
  const clearBtn = document.getElementById("clear");
  clearBtn.classList.remove("clear");
  const colorPicker = document.getElementById("colorPicker");
  const colorPickerVal = colorPicker.value;
  let celClicked = e.target;
  if (celClicked.style.backgroundColor != ""){
    celClicked.style.backgroundColor = "";
  }else{
    celClicked.style.backgroundColor = colorPickerVal;
  }

  clearBtn.addEventListener("click", clearTable);
});

function clearTable(){
  const cells = document.getElementsByTagName("td");
  for(let i = 0; i<cells.length; i++){
    cells[i].style.backgroundColor="";
  }
}

})
