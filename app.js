function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink", "tablink2");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


var thumb1 = document.getElementById("thumb1");
var thumb1Src = document.getElementById("thumb1").src;
var thumb2 = document.getElementById("thumb2");
var thumb2Src = document.getElementById("thumb2").src;
var thumb3 = document.getElementById("thumb3");
var thumb3Src = document.getElementById("thumb3").src;
var thumb4 = document.getElementById("thumb4");
var thumb4Src = document.getElementById("thumb4").src;

thumb1.addEventListener("click", function () {
  document.getElementById("mainImg").src = thumb1Src
})
thumb2.addEventListener("click", function () {
  document.getElementById("mainImg").src = thumb2Src
})
thumb3.addEventListener("click", function () {
  document.getElementById("mainImg").src = thumb3Src
})
thumb4.addEventListener("click", function () {
  document.getElementById("mainImg").src = thumb4Src
})


var thumb5 = document.getElementById("thumb5");
var thumb5Src = document.getElementById("thumb5").src;
var thumb6 = document.getElementById("thumb6");
var thumb6Src = document.getElementById("thumb6").src;
var thumb7 = document.getElementById("thumb7");
var thumb7Src = document.getElementById("thumb7").src;
var thumb8 = document.getElementById("thumb8");
var thumb8Src = document.getElementById("thumb8").src;

thumb5.addEventListener("click", function () {
  document.getElementById("mainImgTwo").src = thumb5Src
})
thumb6.addEventListener("click", function () {
  document.getElementById("mainImgTwo").src = thumb6Src
})
thumb7.addEventListener("click", function () {
  document.getElementById("mainImgTwo").src = thumb7Src
})
thumb8.addEventListener("click", function () {
  document.getElementById("mainImgTwo").src = thumb8Src
})


const hamburger = document.getElementById("hamburger");
const hamburgerMenu = document.getElementById("hamburger-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("toggle");
  hamburgerMenu.classList.toggle("toggle");
})



document.onclick = function (e) {
  if (e.target.id !== "hamburger" && e.target.id !== "hamburger-menu") {
    hamburger.classList.remove("toggle");
    hamburgerMenu.classList.remove("toggle");
  }
}





// ScrollTop Functionality Code

const scrollbtn = document.getElementById("scrolltop-box");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    scrollbtn.style.visibility = "visible";
  } else {
    scrollbtn.style.visibility = "hidden";
  }
}

scrollbtn.addEventListener("click", function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

});






const topBoxToggle = document.getElementById("top-box-toggle");
const imageHolderToggle = document.getElementsByClassName("imagesize")


function gridView() {
  topBoxToggle.style.flexDirection = "row";
}

function listView() {
  topBoxToggle.style.flexDirection = "column";

}

function smallSize() {
  for (let i = 0; i < imageHolderToggle.length; i++) {
    imageHolderToggle[i].style.width = "350px";
  }

}

function largeSize() {
  for (let i = 0; i < imageHolderToggle.length; i++) {
    imageHolderToggle[i].style.width = "500px";
  }

}

//  Page Three Toggle Menu Controls

const arrowToggle = document.getElementById("arrowtoggleone");
const menuOne = document.getElementById("menuone");
const arrowToggleTwo = document.getElementById("arrowtoggletwo");
const menuTwo = document.getElementById("menuTwo");
const arrowToggleThree = document.getElementById("arrowtogglethree");
const menuThree = document.getElementById("menuThree")
const arrowToggleFour = document.getElementById("arrowtogglefour");
const menuFour = document.getElementById("menuFour")
const arrowToggleFive = document.getElementById("arrowtogglefive");
const menuFive = document.getElementById("menuFive")













function myFunction1() {

  arrowToggle.classList.toggle("arrowrotate");
  menuOne.classList.toggle("menu-list-one");

  arrowToggleTwo.classList.remove("arrowrotate");
  menuTwo.classList.remove("menu-list-two");
  arrowToggleThree.classList.remove("arrowrotate");
  menuThree.classList.remove("menu-list-three");
  arrowToggleFour.classList.remove("arrowrotate");
  menuFour.classList.remove("menu-list-four");
  arrowToggleFive.classList.remove("arrowrotate");
  menuFive.classList.remove("menu-list-five");

}

function myFunction2() {

  arrowToggleTwo.classList.toggle("arrowrotate");
  menuTwo.classList.toggle("menu-list-two");

  arrowToggle.classList.remove("arrowrotate");
  menuOne.classList.remove("menu-list-one");
  arrowToggleThree.classList.remove("arrowrotate");
  menuThree.classList.remove("menu-list-three");
  arrowToggleFour.classList.remove("arrowrotate");
  menuFour.classList.remove("menu-list-four");
  arrowToggleFive.classList.remove("arrowrotate");
  menuFive.classList.remove("menu-list-five");

}

function myFunction3() {

  arrowToggleThree.classList.toggle("arrowrotate");
  menuThree.classList.toggle("menu-list-three");

  arrowToggle.classList.remove("arrowrotate");
  menuOne.classList.remove("menu-list-one");
  arrowToggleTwo.classList.remove("arrowrotate");
  menuTwo.classList.remove("menu-list-two");
  arrowToggleFour.classList.remove("arrowrotate");
  menuFour.classList.remove("menu-list-four");
  arrowToggleFive.classList.remove("arrowrotate");
  menuFive.classList.remove("menu-list-five");

}

function myFunction4() {

  arrowToggleFour.classList.toggle("arrowrotate");
  menuFour.classList.toggle("menu-list-four");

  arrowToggle.classList.remove("arrowrotate");
  menuOne.classList.remove("menu-list-one");
  arrowToggleTwo.classList.remove("arrowrotate");
  menuTwo.classList.remove("menu-list-two");
  arrowToggleThree.classList.remove("arrowrotate");
  menuThree.classList.remove("menu-list-three");
  arrowToggleFive.classList.remove("arrowrotate");
  menuFive.classList.remove("menu-list-five");

}
function myFunction5() {

  arrowToggleFive.classList.toggle("arrowrotate");
  menuFive.classList.toggle("menu-list-five");

  arrowToggle.classList.remove("arrowrotate");
  menuOne.classList.remove("menu-list-one");
  arrowToggleTwo.classList.remove("arrowrotate");
  menuTwo.classList.remove("menu-list-two");
  arrowToggleThree.classList.remove("arrowrotate");
  menuThree.classList.remove("menu-list-three");
  arrowToggleFour.classList.remove("arrowrotate");
  menuFour.classList.remove("menu-list-four");

}

arrowToggle.addEventListener("click", () => {

  myFunction1();
})

arrowToggleTwo.addEventListener("click", () => {

  myFunction2();
})

arrowToggleThree.addEventListener("click", () => {

  myFunction3();

})

arrowToggleFour.addEventListener("click", () => {

  myFunction4();

})

arrowToggleFive.addEventListener("click", () => {

  myFunction5();

})



function myFunction(x) {
  if (x.matches) { // If media query matches

    topBoxToggle.style.flexDirection = "column";

  } else {

    topBoxToggle.style.flexDirection = "row";

  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes


var acc = document.getElementsByClassName("accordion");
var i;
var panelMenu = document.getElementsByClassName("panel");


for (i = 0; i < panelMenu.length; i++) {
 panelMenu[i].style.backgroundColor = "red";
 }


 document.addEventListener('mouseup', function(e) {
  var acc = document.getElementsByClassName("accordion");
  var panelMenu = document.getElementsByClassName("panel");

  if (!panelMenu.contains(e.target)) {
      panelMenu.style.display = 'none';
  }
});


// Accordion Functionality Code


var acc = document.getElementsByClassName("accordion");
var panelMenu = document.getElementsByClassName("panel");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}





