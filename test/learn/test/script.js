const body = document.body;
function addItemInlist(){
const listVar = document.createElement("li");
const spanVar = document.createElement("span");
const buttonVar = document.createElement("button");

buttonVar.textContent = "Delete";
spanVar.textContent = userInput.value
listVar.append(spanVar, buttonVar)
unlist.append(listVar)
// unlist.innerText = userInput.value
}

const unlist = document.querySelector("ul");
const userInput = document.getElementById("item");
// userInput.addEventListener("click",
// })



const addItemBtn = document.querySelector("button");
addItemBtn.addEventListener('click', addItemInlist);
