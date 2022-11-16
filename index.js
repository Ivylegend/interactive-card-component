// form selector
var form = document.querySelector("form")
var inputs = document.querySelector("input")

// card details
var cardNumber = document.getElementById("card-number")
var cardName = document.getElementById("card-name")
var cardMonth = document.getElementById("mm")
var cardYear = document.getElementById("yy")
var cvv = document.getElementById("cvc")
var numbers = document.querySelector(".number");

// errors
var error = document.querySelector("error")
var nameError = document.querySelector(".name-err")
var numberError = document.querySelector(".number-err")
var dateError = document.querySelector(".expdate-err")
var cvcError = document.querySelector(".cvc-err")

var container = document.getElementById("uncompleted-class")
var completed = document.getElementById("completed-state")

form.onsubmit = (e) => {
    e.preventDefault()
if (cardName.value === "" || cardName.value === null) {
    nameError.textContent = "Can't be blank";
 }
 if (cardNumber.value === "") {
    numberError.textContent = "Invalid number";
 } else if (number.value === null) {
    numberError.textContent = "Wrong format, numbers only";
 }

 if (cardMonth.value === "" || cardYear.value === "") {
    dateError.textContent = "Can't be blank";
 } else if (cardMonth.value > 2 || cardYear.value > 2) {
    dateError.textContent = "tooo many figures";
 }

 if (cvv.value === "") {
    cvcError.textContent = "Can't be blank";
 }
}

cardName.addEventListener("keypress", function(event){
    let output = [];
    output.push(numbers.innerHTML = event.key);
})

// let errors = [1, 1, 1, 1, 1]

// form.onsubmit = (e) => {
//     e.preventDefault()
//    if (errors[0] != 0) {
//     nameError.textContent = "Can't be blank";
//    }
//    if (errors[1] != 0) {
//     const err = errors[1];
//     if (err === 1) {
//         numberError.textContent = "Wrong format, numbers only";
//     } else {
//         numberError.textContent = "Invalid number";
//     }
//    }
//    if (errors[2] !== 0 || errors[3] !== 0) {
//     const err1 = errors[2];
//     const err2 = errors[3];
//     if (err1 === 1 || err2 === 1) {
//         dateError.textContent = "Can't be blank";
//     } else if (err1 === 2 || err2 === 2) {
//         dateError.textContent = "Invalid";
//     }
//    }
//    if (errors[4] !== 0) {
//     const err = errors[4];
//     if (err === 1) {
//         cvcError.textContent = "Can't be blank";
//     } else {
//         cvcError.textContent = "Invalid";
//     }
//    }
//    if (errors.reduce((a, b) => a + b, 0) === 0) {
//     container.style.display = "none";
//     completed.style.display = "block";

//     container.querySelector("button").onclick = () => location.reload()
//    }
// };


//  if (cardName.length < 1) {
     
//  }

// if (err1 !== 0) 
// inputs[2].classList.add("error");
// if (err2 !== 0)
// inputs[3].classList.add("error");
