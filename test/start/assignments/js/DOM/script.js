const containerNow = document.querySelector("#container");

const firstDiv = document.createElement("div");

firstDiv.style.cssText = "color: red";
firstDiv.textContent = "Hey I'm reds!";
firstDiv.classList.add("firstDiv");
containerNow.appendChild(firstDiv);