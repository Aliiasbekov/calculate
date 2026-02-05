
const calculateKeys = document.querySelectorAll(".list_btn")
const keysOfCalc =
    ["7","8","9","+",
    "4","5","6","-",
    "1","2","3","*",
    "C","0","=","/"];
calculateKeys.forEach((el, index) => {
    el.textContent = keysOfCalc[index]
})

const inputDash = document.querySelectorAll(".list_input")
calculateKeys.addEventListener("click", (e) => {
    const value = e.target.textContent
    if (value !== "=" && value !== "C") {
        inputDash.value += value
    }
})