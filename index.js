
/*----------- shrink navbar ------------*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.padding = "0px 20px";
    document.getElementById("logo").style.height = "35px";
  } else {
    document.getElementById("nav").style.padding = "10px 20px";
    document.getElementById("logo").style.height = "65px";
  }
}

/*----------- Moblie menu ------------*/

function mobileMenu() {
  var x = document.getElementById("mobileLinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function subMenuEvents() {
  var x = document.getElementById("subMenuEvents");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/*----------- accordion------------*/
function accordion(id) {
  var show = document.getElementById(id);
  if (show.style.display === "flex") {
    show.style.display = "none";
  } else {
    show.style.display = "flex";
  }
}

/*----------- scroll to ------------*/
// var mybutton = document.getElementById("myBtn");

// window.onscroll = function() {scrollToTop()};

// function scrollToTop() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }