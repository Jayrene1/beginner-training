const input = document.getElementById("to-do-input");
const addButton = document.getElementById("to-do-button");
const list = document.getElementById("to-do-list");
// console.log(input);
// console.log(addButton);
// console.log(list);

input.addEventListener("keypress", handleKeyPress);
addButton.addEventListener("click", handleClick);

function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleClick();
    }
  }

function handleClick() {
    const value = input.value || "";
    
    if (value.length > 0) {
        const listItem = document.createElement("li");
        const deleteButton = document.createElement("button");

        listItem.innerText = value;
        list.appendChild(listItem);

        input.value = ""



    }
}

// let number1 = 1;
// const number2 = 2;

// function add() {
//     number1 = number1 + number2;
//     console.log(number1);
// }

// add();

// let string1 = "Garrett";
// let string2 = "is cool!";

// function stringTest() {
//     let output = "";

//     output = string1 + " " + string2 + "  2  ";
//     console.log(output);
// }

// stringTest()

// console.log(document);