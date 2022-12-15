const cardHolder = document.getElementById('card-holder')
const cardNumber = document.getElementById('card-number')
const securityCode = document.getElementById('security-code')

cardHolder.addEventListener('input', e => {
    const holder = e.target.value
    let pattern = /^[a-z ,.'-]+$/i
    document.querySelector('.name').innerHTML = holder
})

securityCode.addEventListener('input', e => {
    const cvc = e.target.value
    let pattern = /\b\d{1,3}\b/
    document.querySelector('.code').innerHTML = cvc
})

cardNumber.addEventListener('input', e => {
    const card = e.target.value
    let div = card.split(' ').join(' ')    
    if(card.length > 0) {
        div = div.match(new RegExp('.{1,4}', 'g')).join(' ')
    }
    document.querySelector('.card').innerHTML = div
})