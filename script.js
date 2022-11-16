// form selector
var form = document.querySelector("form");
var inputs = document.querySelector("input");

// card details
var number = document.getElementById("card-number");
var Name = document.getElementById("card-name");
var cardMonth = document.getElementById("mm");
var cardYear = document.getElementById("yy");
var cvv = document.getElementById("cvc");

// errors
var nameError = document.querySelector(".name-err");
var numberError = document.querySelector(".number-err");
var dateError = document.querySelector(".expdate-err");
var cvcError = document.querySelector(".cvc-err");

var container = document.getElementById("uncompleted-class");
var completed = document.getElementById("completed-state");
let errors = [1, 1, 1, 1, 1];

form.onsubmit = (e) => {
    e.preventDefault();
    if (errors[0] !== 0) {
        inputs[0].classList.add("error");
        nameError.textContent = "Can't be blank";
    }
    if (errors[1] !==0) {
        inputs[1].classList.add("error");
        const err = errors[1];
        if (err === 1) {
            numberError.textContent = "Can't be blank";
        } else if (err === 2) {
            numberError.textContent = "Wrong format, numbers only"
        } else {
            numberError.textContent = "Invalid number";
        }
    }

    if (errors[2] !== 0 || errors[3] !== 0) {
        const err1 = errors[2];
        const err2 = errors[3];
        if (err1 !== 0) {
            inputs[2].classList.add("error");
        } if (err2 !== 0) {
            inputs[3].classList.add("error");
        } if (err1 === 1 || err2 === 1) {
            dateError.textContent= "Can't be blank";
        } else if (err1 === 2 || err2===2) {
            dateError.textContent = "Invalid";
        }
    }

    if (errors[4] !== 0) {
        inputs[4].classList.add("error");
        const err = errors[4];
        if (err===1) {
            cvcError.textContent = "Can't be blank";
        } else {
            cvcError.textContent = "Invalid";
        }
    }

    if (errors.reduce((a, b) => a + b, 0) === 0) {
        container.style.display = "none";
        completed.style.display = "block";

        container.querySelector("button").onclick = () => location.reload()
    }
};

inputs.forEach((input) => {
    input.onkeypress = (e) => {
        const key = e.key;
        if (
            (key === "e" ||
            key=== "-" ||
            key === "+" ||
            key === "_" ||
            key === "=") &&
            input.Name !== "Name"
        )
        e.preventDefault();
    };
    input.addEventListener("keyup", () => {
        if (input.classList.contains("error")) {
            input.classList.remove("error");
        } 
        const type = input.Name;
        if (type === "Name") {
            nameError.textContent = "";
            if (input.value.trim()) {
                Name.textContent = input.value.trim().toUpperCase();
                errors[0] = 0; 
            } else {
                Name.textContent = "JANE APPLESEED";
                errors[0] = 1;
            }
        } else if (type === "number") {
            numberError.textContent = "";
            const value = input.value.trim().replace(/\s/g, "");
            const x = Number(value);
            if (x===0) {
                errors[1] = 1;
            } else if (x != x) {
                errors[1] = 2;
            } else if (value.length < 16) {
                errors[1] = 3;
            } else {
                errors[1] = 0;
            }
            if (value.length > 16) {
                input.value = input.value.slice(0, 16);
                return;
            }
            let num = "0".repeat(16 - value.length) + value;
            number.textContent = `${num.slice(0, 4)} ${num.slice(4, 8)} ${num.slice(8, 12)} ${num.slice(12, 16)}`;
        } else if (type === "cvv") {
            cvcError.textContent = ""; 
            const x = Number(input.value.trim());
            if (x === 0) {
                errors [4] = 1;
            } else if (x != x || x < 100) {
                errors[4] = 2;
            } else {
                errors[4] = 0;
            }
            let value = x || "0";
            value = value.toString();
            const length = value.length;
            if (length === 4) {
                cvv.textContent = value;
                return;
            } else if (length > 4) {
                cvv.textContent = value.slice(0, 4);
                return;
            }
            cvv.textContent = "0".repeat(3 - length) + value;
        } else if (type === "cardMonth" || type === "cardYear") {
            dateError.textContent = "";
            const value = input.value.trim();
            if(value.length > 2) {
                input.value = value.slice(0, 2);
                return;
            }
            if (type === "cardMonth") {
                cardMonth.textContent = "0".repeat(2 - value.length) + value;
            } else {
                cardYear.textContent = "0".repeat(2 - value.length) + value;
            }
            const x = Number(value);
            const i = type === "cardMonth" ? 2 : 3;
            if (x === 0) {
                errors[i] = 1;
            } else if (x != x || x < 0 || (i === 2 && x > 12)) {
                errors[i] = 2;
            } else {
                errors[i] = 0;
            }
        }
    });
});
