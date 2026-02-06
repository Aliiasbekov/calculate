
const calculateKeys = document.querySelectorAll(".list_btn")
const keysOfCalc =
    ["C","%","**","<",
    "7","8","9","+",
    "4","5","6","-",
    "1","2","3","*",
    ".","0","=","/"];

calculateKeys.forEach((el, index) => {
    el.textContent = keysOfCalc[index]
})

const inputDash = document.querySelector(".list_input")

calculateKeys.forEach((el, index) => {
    el.textContent = keysOfCalc[index]

    el.addEventListener("click",  (e) => {
        const value = e.target.textContent

        if(value === "<"){
            inputDash.value = inputDash.value.slice(0, -1)
            return
        }

        if(value === "C"){
            inputDash.value = " "
            return
        }

        if (value === "=") {
            try {
                inputDash.value = eval(inputDash.value)
            } catch {
                inputDash.value = "Error"
            }
        }
        if(value === "%"){
            return inputDash.value = inputDash.value / 100
        }
        if(value !== "=" && value !== "C"){
            inputDash.value += value
        }

    })
})

