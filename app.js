// ¡Buena suerte!
//https://api.adviceslip.com/advice

const quote = document.querySelector('.card__quote');
const button = document.querySelector('.card__dice');
const image = document.querySelector('img');
const advice = document.querySelector('#advice-id');

button.addEventListener('click', async function(){
    const response = await fetch("https://api.adviceslip.com/advice");
    console.log("objeto response", response);
    
    const data = await response.json();
    console.log("objeto data", data.slip);
    console.log(typeof(response));

    quote.textContent = data.slip.advice;
    advice.textContent = data.slip.id;
    
});