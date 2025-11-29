const inputValue = document.getElementById('app_input')
const button = document.getElementById('app_btn')

button.addEventListener('click', () => {
    const theValue = parseFloat(inputValue.value)
    const exchangeRate = 11
    const dollars = Math.round(theValue / exchangeRate)
   const totalCents = Math.round(dollars * 100)
   const quarters = Math.floor(totalCents / 25)
   const remainingCents = (totalCents % 25)
   const nickels = Math.floor(remainingCents / 5)
   const remainingNickels = (remainingCents % 5)
   const pennies = remainingNickels
})