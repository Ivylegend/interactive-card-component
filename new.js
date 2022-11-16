// form selector
var form = document.querySelector("form");
var inputs = document.querySelector("input");

// card details
var cardNumber = document.getElementById("card-number");
var cardName = document.getElementById("card-name");
var cardMonth = document.getElementById("mm");
var cardYear = document.getElementById("yy");
var cvc = document.getElementById("cvc");
var numbers = document.querySelector(".number");
var personName = document.querySelector(".name");
var month = document.querySelector(".card-month");
var year = document.querySelector(".card-year");
var cvvBack = document.querySelector(".cvv");

// errors
var error = document.querySelectorAll(".error");
var nameError = document.querySelector(".name-err");
var numberError = document.querySelector(".number-err");
var dateError = document.querySelector(".expdate-err");
var cvcError = document.querySelector(".cvc-err");

//button
var submitButton = document.querySelector(".button-one");
var continueButton = document.querySelector(".button-two")

var container = document.getElementById("uncompleted-class");
var completed = document.getElementById("completed-state");

cardName.addEventListener("keyup", (e) => {
  let cardNameValue = cardName.value;
  let key = e.key;
  let keyLetters = key.match(/^[A-za-z ]*$/);
  if (cardNameValue.length === 0) {
    nameError.textContent = "Please enter your name";
  } else if (keyLetters) {
    personName.textContent = cardNameValue;
  } else {
    cardName.setAttribute("disabled", "");
    nameError.innerHTML = "Please use only letters!";
  }
});

cardNumber.addEventListener("keyup", (e) => {
  let cardNumberValue = cardNumber.value;
  let key = e.key;
  let keyNumbers = key.match(/^[0-9 ]*$/);
  if (cardNumberValue.length === 0) {
    numberError.textContent = "Please enter your card number!";
  } else if (keyNumbers) {
    numbers.textContent = cardNumberValue;
  } else if (key === "Backspace") {
    cardNumber.setAttribute("enabled", "");
  } else {
    cardNumber.setAttribute("disabled", "");
    numberError.innerHTML = "Please use only numbers!";
  }
});
cardNumber.addEventListener("input", (e) => {
  e.target.value = e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{12})/g, "$1 ")
    .trim();
});
cardMonth.addEventListener("input", (e) => {
  let value = target.value;
  let valueNumbers = value.match(/^[0-9 ]*$/);
  if (value === "") {
    dateError.innerHTML = "Please enter month";
  } else if (valueNumbers) {
    month.innerHTML = value;
  } else {
    dateError.innerHTML = "Please enter month!";
    cardMonth.setAttribute("disabled", "");
  }
});

cardYear.addEventListener("input", (e) => {
  let value = target.value;
  let valueNumbers = value.match(/^[0-9 ]*$/);
  if (value === "") {
    dateError.innerHTML = "Please enter year";
  } else if (valueNumbers) {
    year.innerHTML = value;
  } else {
    dateError.innerHTML = "Please enter year!";
    cardYear.setAttribute("disabled", "");
  }
});

cvc.addEventListener("input", (e) => {
  let value = target.value;
  let valueNumbers = value.match(/^[0-9 ]*$/);
  if (value === "") {
    cvcError.innerHTML = "Please enter cvc";
  } else if (valueNumbers) {
    cvvBack.innerHTML = value;
  } else {
    cvcError.innerHTML = "Please enter cvc!";
    cvc.setAttribute("disabled", "");
  }
});

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (cardName.value.length <= 0) {
        nameError.innerHTML = "Please enter your name!";
    } else if (cardNumber.value.length <= 0) {
        numberError.innerHTML = "Please enter your card number!";
    } else if (cardMonth.value.length <= 0) {
        dateError.innerHTML = "Please enter month!";
    } else if (cardYear.value.length <= 0) {
        dateError.innerHTML = "Please enter year!";
    } else if (cvc.value.length <= 0) {
        cvcError.innerHTML = "Please enter your cvc!";
    } else {
        container.style.display = "none";
        completed.style.display = "block";
    }
});
continueButton.addEventListener("click", () => {
    container.style.display = "block";
        completed.style.display = "none";
})
