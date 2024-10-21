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

function calculate() 
{
        
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const number3 = parseFloat(document.getElementById('number3').value);

    let vysledek;
   if(isNaN(number1))
   {
    vysledek = number3*number2;
    document.getElementById('number1').innerText=vysledek;
   }
   else
    {
    if(isNaN(number2))
    {
    vysledek = number3*number1;
    document.getElementById('number2').innerText=vysledek;
    }
    else
    {
    if(isNaN(number3))
    {
        if(number2===0)
        {
            resultDisplay.textContent = "Nelze dělit nulou!";
        return;
        }
        else
        {
            vysledek = number1 / number2;
            document.getElementById('number3').innerText=vysledek;
        }
    }
}
}
}
    