const inputValue = document.getElementById('app_input')
const button = document.getElementById('app_btn')
const result = document.getElementById('result')


button.addEventListener('click', () => {
    const theValue = parseFloat(inputValue.value)
    const exchangeRate = 11

    const dollars = Math.round(theValue / exchangeRate)
    
   const totalCents = Math.round(dollars * 100)
   
   const quarters = Math.floor(totalCents / 25)
   const remainingCents = (totalCents % 25)

const dimes = Math.floor(remainingCents / 10)
const remainingAfterDimes = remainingCents % 10


   const nickels = Math.floor(remainingAfterDimes / 5)
   const remainingNickels = (remainingAfterDimes % 5)

   const pennies = remainingNickels

result.innerHTML = `Total cents: ${totalCents}<br>
Quarters: ${quarters}<br>
Dimes: `
})