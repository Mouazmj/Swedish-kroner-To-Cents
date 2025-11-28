const inputValue = document.getElementById('app_input')
const button = document.getElementById('app_btn')

button.addEventListener('click', () => {
    const theValue = parseFloat(inputValue.value)
    console.log(theValue)
})