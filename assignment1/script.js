let op = ["/", "*", "-", "+", "%", ".", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
let string = ""
let buttons = document.body.querySelectorAll("button")
let inputfield = document.body.querySelector('input')

// to add click event on each button 
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        inputfield.style.color = "white"
        if (button.innerHTML == "=") {
            equals()
        }
        else if (button.innerHTML == "AC") {
            clear()
        }
        else if (button === document.body.querySelector(".back")) {
            back()
        }
        else {
            string = string + button.innerHTML
        }
        inputfield.value = string
    })
});

// to add keydown event for the each button
document.addEventListener("keydown", (e) => {
    inputfield.style.color = "white";
    const key = e.key
    if (op.includes(key)) {
        string += key
    }
    else if (key === "=" || key === "Enter") {
        equals()
    }
    else if (key === "Backspace") {
        back()
    }
    else if (key == " " || key === "Escape") {
        clear()
    }
    inputfield.value = string
})

// a function that sets the variable string to an empty string.
function clear() {
    string = ""
}

// a function that removes the last character from a string.
function back() {
    string = string.slice(0, -1)
}

// function that performs calculations based on a string input
function equals() {
    try {
        string = string.replace("%", "/100")
        string = string.replace("x", "*")
        if (string.includes('//')) {
            throw error();
        }
        else if (string.includes("/") || string.includes(".")) {
            string = eval(string).toFixed(2)
        } else {
            string = eval(string).toFixed(0)
        }
        if (isNaN(string) || string == "Infinity") {
            string = "Cant Divide by 0"
        }
    }
    catch (error) {
        string = "INVALID INPUT"
        inputfield.style.color = "#FF3B3F";
        setTimeout(clear, 0);
    }
}