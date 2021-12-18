
/*----------- shrink navbar ------------*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.padding = "7px 20px";
    document.getElementById("logo").style.height = "35px";
    document.getElementById("nav").style.boxShadow = "0px 2px 6px rgba(0, 0, 0, 0.18)";
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

/*----------- tabs------------*/
function openTab(evt, TabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(TabName).style.display = "flex";
  evt.currentTarget.className += " active";
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