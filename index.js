const cardHolder = document.getElementById('card-holder')
const securityCode = document.getElementById('security-code')

cardHolder.addEventListener('blur', e => {
    const holder = e.target.value
    let pattern = /^[a-z ,.'-]+$/i
    let result = pattern.test(holder)
    console.log(result)
})

securityCode.addEventListener('blur', e => {
    const cvc = e.target.value
    let pattern = /\b\d{1,3}\b/
    let result = pattern.test(cvc)
    console.log(result)
})