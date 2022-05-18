//---------this code is for navbar -----------

var navBar = document.querySelector(".header");
var responsiveNav = document.querySelector(".nav-list");
var logo = document.querySelector(".logo > a h1");
var navList = document.querySelectorAll(".nav-links, .logo");
var menuLine = document.querySelectorAll(".line");
var menuBar = document.querySelector(".menu-bar");
window.onscroll = function () {
  scrollFunction();
  backToTop();
  menuIcon();
  navBgChange();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    navBar.style.background = "white";
    navBar.style.boxShadow = "0px 1px 10px rgba(0, 0, 0, 0.662)";
    logo.style.color = "black";
    for (var i = 0; i < navList.length; i++) {
      navList[i].style.color = "black";
    }
  } else {
    navBar.style.background = "#0000005c";
    navBar.style.boxShadow = "none";
    logo.style.color = "white";
    for (var i = 0; i < navList.length; i++) {
      navList[i].style.color = "white";
    }
  }
}
function menuIcon() {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    for (var m = 0; m < menuLine.length; m++) {
      menuLine[m].style.background = "black";
    }
  } else {
    for (var m = 0; m < menuLine.length; m++) {
      menuLine[m].style.background = "white";
    }
  }
}
function navBgChange() {
  if (
    document.body.offsetWidth < 979 ||
    document.documentElement.offsetWidth < 979
  ) {
    if (
      document.body.scrollTop > 700 ||
      document.documentElement.scrollTop > 700
    ) {
      responsiveNav.style.background = "white";
    } else {
      responsiveNav.style.background = "#121212";
    }
  } else {
    responsiveNav.style.background = "transparent";
  }
}
if (screen.width >= 600 || screen.width <= 979) {
  menuBar.addEventListener("click", function () {
    responsiveNav.style.display = "block";
    responsiveNav.classList.add("nav-animation");
  });

  // document.addEventListener("mouseup", function (event) {
  //   var closeAnimi = responsiveNav;
  //   if (event.target != closeAnimi) {
  //     responsiveNav.classList.remove("nav-animation");
  //     responsiveNav.style.display = "none";
  //   }
  // });
} else if (screen.width < 979) {
  responsiveNav.style.display = "block !important";
  responsiveNav.classList.remove("nav-animation");
}

// const unOrder = document.querySelector("ul");
// unOrder.appendChild(unOrder.firstElementChild);
// const list = document.createElement("li");
// var anchor = document.createElement("a");
// var homeIcon = '<i class="fa-solid fa-house nav-icons"></i>';
// anchor.innerHTML = homeIcon + "Home";
// list.appendChild(anchor);
// anchor.className = "nav-links";

// const element = document.querySelector(".nav-list ul");
// element.appendChild(list);
// this code for responsive navbar

//---------code ends for navbar -----------

//---------this code is for back to top button-------
var topBtn = document.querySelector("#backtotop");
function backToTop() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    topBtn.style.opacity = "1";
  } else {
    topBtn.style.opacity = "0";
  }
}

topBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// this code for news links
var newsBottomLink = document.querySelector(".bottom-news-btn");
var newsTopLink = document.querySelector(".n-link-area");
window.onresize = function () {
  showButton();
};
function showButton() {
  if (
    document.body.offsetWidth < 979 ||
    document.documentElement.offsetWidth < 979
  ) {
    newsBottomLink.style.display = "block";
    newsTopLink.style.display = "none";
  } else {
    newsBottomLink.style.display = "none";
    newsTopLink.style.display = "block";
  }
}
// }
// function addButton() {
//   if (
//     document.body.offsetWidth < 979 ||
//     document.documentElement.offsetWidth < 979
//   ) {
//     const unOrder = document.querySelector("ul");
//     unOrder.appendChild(unOrder.firstElementChild);
//     const list = document.createElement("li");
//     var anchor = document.createElement("a");
//     var homeIcon = '<i class="fa-solid fa-house nav-icons"></i>';
//     anchor.innerHTML = homeIcon + "Home";
//     list.appendChild(anchor);
//     anchor.className = "nav-links";
//     const element = document.querySelector(".nav-list ul");
//     element.appendChild(list);
//   }
// }

//---------code is end for back to top button-------

//this code for carousel slider------------

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    // items: 4,
    loop: true,
    margin: 5,
    nav: true,
    navText: [
      '<button><i class="fa-solid fa-angle-left nav-arrow"></i></button>',
      '<button><i class="fa-solid fa-angle-right nav-arrow"></i></button>',
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      300: {
        items: 3,
        nav: false,
      },
      500: {
        items: 3,
        nav: false,
      },
      600: {
        items: 4,
        nav: true,
      },
      1000: {
        items: 4,
        nav: true,
        loop: false,
      },
    },
  });
});
