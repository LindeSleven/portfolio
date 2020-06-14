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
