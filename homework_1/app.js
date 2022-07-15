const passportInput = document.querySelector(".passportInput")
const passportCheck = document.getElementsByClassName(".passportCheck");
const passportResult = document.querySelector(".passportResult");


const passportRegExp = /1 \d(13)/;
passportCheck[0].addEventListener("click", () => {
    if (passportRegExp.test(passportInput.value)) {
        passportResult.innerText = "OK";
        passportResult.style.color = "yellow";
    } else {
        passportResult.innerText = "NOT OK";
        passportResult.style.color = "red";
    }
});

const click =document.querySelector(".click")
const block = document.querySelector(".block");

let position = 0;
click.addEventListener("click", () => {
    position += 16;
    block.style.left =`${position}px`;
})



