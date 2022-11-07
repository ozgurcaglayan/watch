setInterval(setClock, 1000);

const hourHand= document.querySelector('[data-hour]');
const minuteHand= document.querySelector('[data-minute]');
const secondHand = document.querySelector('[data-second]');


function setClock(){
    const currentData =new Date();
    const secondsRatio = currentData.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentData.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentData.getHours()) / 12;
    
    console.log("secondsRatio: " + secondsRatio);
    console.log("minutesRatio: " + minutesRatio);
    console.log("hoursRatio: " + hoursRatio);
   
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio){

    element.style.setProperty("--rotation",rotationRatio * 360);
}

setClock()