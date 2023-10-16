function openNav() {
  document.getElementById("mySidepanel").style.width = "220px";
}
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

var dropdown = document.getElementsByClassName("dropdown-btn");
for (var i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
