let boxes = document.querySelectorAll(".box");
let rstBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            //Player X
            box.textContent = "O";
            turnO = false;
        } else {
            //Player O
            color = "black";
            box.textContent = "X";
            box.style.color = "red";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});
const resetBtn = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hidden")
}
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
        rstBtn.classList.remove("hidden");

    }
}
const showWinner = (win) => {
    msg.textContent = `Player ${win} wins!`;
    msgContainer.classList.remove("hidden");
    rstBtn.classList.add("hidden");
    disableBoxes();
}
const checkWinner = () => {
    for (pattern of winPatterns) {

        let pos1Val = boxes[pattern[0]].textContent;
        let pos2Val = boxes[pattern[1]].textContent;
        let pos3Val = boxes[pattern[2]].textContent;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetBtn);
rstBtn.addEventListener("click", resetBtn);