/*javascript voor grid 

let imageNum = 0;
let toggle = 0;
let columns = "";
let rows = "";

function enhanceImage(imgNum) {
  columns = document.getElementById("img" + imgNum).style["grid-column"];
  rows = document.getElementById("img" + imgNum).style["grid-row"];
  toggle = 1;
  document.getElementById("img" + imgNum).style.background = "lightpink";
  document.getElementById("img" + imgNum).style["grid-column"] = "3/span 7";
  document.getElementById("img" + imgNum).style["grid-row"] = "3/span 7";
  document.getElementById("img" + imgNum).style["z-index"] = "1";
  document.querySelector(".jsGrid").classList.toggle("imageGridSwitch");
  for (i = 1; i < 10; i++) {
    if (i == imageNum) {
      continue;
    } else {
      //TODO: Get the color change working
      document.getElementById("img" + i).style["z-index"] = "0";
      $("#img" + i).animate(
        { opacity: "0.3", backgroundColor: "rgb( 0, 0, 0 )" },
        1000
      );
    }
  }
}

function minimizeImage(imgNum) {
  document.getElementById("img" + imgNum).style["grid-column"] = columns;
  document.getElementById("img" + imgNum).style["grid-row"] = rows;
  document.querySelector(".jsGrid").classList.toggle("imageGridSwitch");
  for (i = 1; i < 4; i++) {
    if (i % 2 == 1) {
      document.getElementById("img" + i).style.background = "lightblue";
    } else document.getElementById("img" + i).style.background = "lightgreen";
    $("#img" + i).animate({ opacity: "1.0" }, 1000);
  }
  toggle = 0;
}

function toggleCntrl(num) {
  if (toggle == 1 && imageNum == num) {
    minimizeImage(num);
  } else if (toggle == 0) {
    imageNum = num;
    enhanceImage(num);
  }
}

document.getElementById("img1").onclick = function() {
  toggleCntrl(1);
};
document.getElementById("img2").onclick = function() {
  toggleCntrl(2);
};
document.getElementById("img3").onclick = function() {
  toggleCntrl(3);
};

*/

// function expression to select elements

/*const selectElement = s => document.querySelector(s);

// open the menu on click

selectElement(".open").addEventListener("click", () => {
  selectElement(".nav-list").classList.add("active");
});

// close the menu on click

selectElement(".close").addEventListener("click", () => {
  selectElement(".nav-list").classList.remove("active");
});*/

// MODAL

/*
let modal = document.getElementById("project1-modal");
let btn = document.getElementById("btn");
let span = document.getElementsByClassName("close")[0];

btn.addEventListener("click", () => {
  modal.style.display = "block";
});

span.addEventListener("click", () => {
  modal.style.display = "none";
});*/

/*window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};*/

/* CONTACT FORM */

const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const msg = document.getElementById("msg");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add("error");
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSucces(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
}

function checkRequired(inputArr, e) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${input.name} is required`);
      e.preventDefault();
    } else {
      showSucces(input);
    }
  });
}

function checkEmail(input, e) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSucces(input);
  } else {
    showError(input, "Email is not valid");
    e.preventDefault();
  }
}

form.addEventListener("submit", function (e) {
  //e.preventDefault();

  checkRequired([name, email, msg], e);
  checkEmail(email, e);
});

/* RESPONSIVE NAV */

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const navItems = document.querySelectorAll(".nav-item");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("open");
  navItems.forEach((item) => {
    item.classList.toggle("fade");
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("open");
    navItems.forEach((item) => {
      item.classList.remove("fade");
    });
  });
});
