const inputValue = document.getElementById('app_input')
const button = document.getElementById('app_btn')

button.addEventListener('click', () => {
    const theValue = parseFloat(inputValue.value)
    const exchangeRate = 11
    const krToDollars = Math.round(theValue / exchangeRate)
    console.log(krToDollars)
})