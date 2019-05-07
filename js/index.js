//when nav button are clicked, they become active
const btns = document.getElementsByClassName("navBtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    const dest = this.getAttribute("dest");
    const path = location.hash;
    const nav = document.getElementsByTagName("nav");
    if (path === "" || dest === "home") {
      nav[0].classList.add("hide");
    } else {
      nav[0].classList.remove("hide");
    }
    location.href = `#${dest}`;
  });
}

const aboutBtn = document.getElementsByClassName("aboutBtn");
aboutBtn[0].addEventListener("click", function() {
  const dest = this.getAttribute("dest");
  location.href = `#${dest}`;
  const nav = document.getElementsByTagName("nav");
  nav[0].classList.remove("hide");
});
