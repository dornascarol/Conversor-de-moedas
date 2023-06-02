const convertButton = document.querySelector(".convert-button")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const dolarToday = 5.2   //valor fictício para o Dólar

    const convertedValue = inputCurrencyValue / dolarToday

    console.log(convertedValue)
}

convertButton.addEventListener("click", convertValues)