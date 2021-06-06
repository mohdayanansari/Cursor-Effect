let mouseCursor = document.querySelector(".cursor");
let navlinks = document.querySelectorAll(".nav-links li");
let fcover = document.querySelector(".front-cover");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

//When hover on the link cursor will grow.
navlinks.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    link.classList.remove("link-show");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    link.classList.add("link-show");
  });
});
//--------ends-------------->>

//grayscale image cursor grow

//------ends--->>
