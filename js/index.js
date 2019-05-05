//when nav button are clicked, they become active

const navBtn = document.querySelector(".navBtn");
var btns = document.getElementsByClassName("navBtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
