
var list = [];
var input = document.getElementById("input");
var todolist = document.getElementById("todolist");
document.getElementById("button").onclick = clicked;


function clicked() {
  list.push(input.value);
  input.value = "";
  showList();
 
}

function showList() {
  todolist.innerHTML = " ";
  list.forEach(function (n, i) {
    todolist.innerHTML +=
      "<li>" +
      n +
      "<a onclick='edititems(" +
      i +
      ")'>Edit</a>" +
      "<a onclick='deleteitems(" +
      i +
      ")'>&times | </a></li>";
  });
}


function deleteitems(i) {
  list.splice(i, 1);
  showList();
}


function edititems(i) {
  
  var newValue = prompt("Write what you want to edit");
  list.splice(i, 1, newValue);
  showList();
}