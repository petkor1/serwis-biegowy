
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

// $(window).bind('scroll', function (){
//   if ($window.scrollTop()> 500) {
//     $('.nav-mobile-container').addClass('scroll-up');
//   }
//   else {
//     $('.nav-mobile-container').removeClass('scroll-up');
//   }
// });
(function(){

  var doc = document.documentElement;
  var w = window;

  var prevScroll = w.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;

  var header = document.getElementById('site-header');

  var checkScroll = function() {

    /*
    ** Find the direction of scroll
    ** 0 - initial, 1 - up, 2 - down
    */

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) { 
      //scrolled up
      direction = 2;
    }
    else if (curScroll < prevScroll) { 
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }

    prevScroll = curScroll;
  };

  var toggleHeader = function(direction, curScroll) {
    if (direction === 2 && curScroll > 75) { 

      //replace 52 with the height of your header in px

      header.classList.add('hide');
      prevDirection = direction;
    }
    else if (direction === 1) {
      header.classList.remove('hide');
      prevDirection = direction;
    }
  };

  window.addEventListener('scroll', checkScroll);

})();

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