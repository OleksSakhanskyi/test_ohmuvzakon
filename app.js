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
        
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const number3 = parseFloat(document.getElementById('number3').value);

   if(isNaN(number1))
   {
    number1= number3*number2;
    document.getElementById('number').innerText=number1;
   }
   else
    {
    if(isNaN(number2))
    {
    number2=number3*number1;
    document.getElementById('number').innerText=number2;
    }
    else
    {
    if(isNaN(number3))
    {
        if(number2==0)
        {
            number3 = "Nelze delit nulou";
            document.getElementById('text').innerText=number3;
        return;
        }
        else
        {
            number3 = number1 / number2;
            document.getElementById('number').innerText=number3;
        }
    }
}
}
}
    