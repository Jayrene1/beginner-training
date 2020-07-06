const input = document.getElementById("to-do-input");
const addButton = document.getElementById("to-do-button");
const list = document.getElementById("to-do-list");

addButton.addEventListener("click", handleClick);
input.addEventListener("keypress", handleKeyPress);

function handleKeyPress(e) {
  if (e.key === "Enter") {
    handleClick();
  }
}

function handleClick(event) {
  const value = input.value || "";
  if (value.length > 0) {
    const listItem = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.innerText = "-";
    deleteButton.addEventListener("click", removeItem);
    listItem.innerText = value;
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
    input.value = "";
  }
}

function removeItem(event) {
  console.log(event);
  const listItem = event.target.parentElement;
  list.removeChild(listItem);
}
