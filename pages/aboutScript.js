$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

function toggle() {
    var x = document.getElementsByClassName("rowB");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
