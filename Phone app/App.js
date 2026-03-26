const body = document.querySelector('body');
const messageOut = document.querySelector('#messageOut');
const callButton = document.querySelector('#callBtn');
const hideButton = document.querySelector('#hideBtn');
const wrapper = document.querySelector('#wrapper');

callButton.addEventListener('click', displayMessage);
hideButton.addEventListener('click', hideWrapper);

function displayMessage(){
    let message = '';
    let amount = prompt('Enter amount to pay');
    let payee = prompt('Name of payee');
    let code = prompt('Enter code to pay to');
    message = `Yello. Wishyuye ${amount} kuri ${payee}, ${code}. ikiguzi 0 RWF. Transaction ID 26894365584. Konti yawe ya mobile money usigaranye no 5230 RWF.`;
    messageOut.textContent = message;
    wrapper.style.display = 'flex';
}

function hideWrapper(){
    wrapper.style.display = 'none';
}
