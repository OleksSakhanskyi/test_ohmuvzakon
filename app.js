if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

function calculate() {
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let number3 = parseFloat(document.getElementById('number3').value);
if((isNaN(number1)||isNaN(number2))&&(isNaN(number1)||isNaN(number3))&&(isNaN(number3)||isNaN(number2))&&(isNaN(number3)||isNaN(number2)||isNaN(number1)))
{
    document.getElementById('text').innerText = "Nelze spocitat";
     return;
}
else{
    if (isNaN(number1)) {
        number1 = number3 * number2;
        document.getElementById('number1').value = number1;
        document.getElementById('text').innerText = "";
    } else if (isNaN(number2)) {
        if (number1 === 0) {
            document.getElementById('text').innerText = "Nelze dělit nulou";
            return;
        } 
        else{
        number2 = number3 / number1;
        document.getElementById('number2').value = number2;
        document.getElementById('text').innerText = "";
    }
    } else if (isNaN(number3)) {
        if (number2 === 0) {
            document.getElementById('text').innerText = "Nelze dělit nulou";
            return;
        } else {
            number3 = number1 / number2;
            document.getElementById('number3').value = number3;
            document.getElementById('text').innerText = "";
        }
    }
}
}