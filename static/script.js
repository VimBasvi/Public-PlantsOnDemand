console.log("JavaScript file is being executed.");


let plantHealth = 100;
let dayCount = 1; 
let hasReceivedSunlight = false;
let hasReceivedFertilizer = false;
document.getElementById('playAgainButton').hidden = true;
document.getElementById('plantDead').hidden = true;

function updatePlantHealth() {
    document.getElementById('health').innerText = `Plant Health: ${plantHealth}%`;
    document.getElementById('healthBar').style.width = `${plantHealth}%`;

     if (plantHealth <= 67 && dayCount === 1) {
            dayCount = 2;
            document.getElementById('dayCount').textContent = dayCount;
        } else if (plantHealth <= 34 && dayCount === 2) {
            dayCount = 3;
            document.getElementById('dayCount').textContent = dayCount;
            document.getElementById('message').textContent = 'Day 3: Please water your plant!';
        }


    if (plantHealth <= 0) {
     /*   document.getElementById('plant').style.backgroundColor = 'gray'; */
        document.getElementById('waterButton').disabled = true;
        document.getElementById('sunlightButton').disabled = true;
        document.getElementById('fertilizeButton').disabled = true;
        document.getElementById('sunlightButton').hidden = true;
        document.getElementById('fertilizeButton').hidden = true;
        document.getElementById('waterButton').hidden = true; 
        document.getElementById('plantDead').hidden = false;
        document.getElementById('message').hidden = true;
        document.getElementById('playAgainButton').hidden = false;
    } else {
        document.getElementById('plantDead').hidden = true;
        document.getElementById('plant').style.backgroundColor = disabled;
   
    }
}




function updateDayCounter() {
const dayCounter = document.getElementById('dayCounter');
dayCounter.textContent = `Day: ${day}`;
}


function updatePlantImage() {
const plantImage = document.getElementById('plantImage');
const plantImages = [,
 'images/6.png',
        'images/7.png',
        'images/8.png',
        'images/9.png',
];
const currentImageIndex = (day - 2) % plantImages.length;
plantImage.src = plantImages[currentImageIndex];
plantImageContainer.style.backgroundColor = 'green'; 
}



function updateDay() {
day++;
updateDayCounter();
lastDay = 24; 

// Update the plant image every 5 days
if (day % 5 === 1) {
updatePlantImage();
}

// Check if it's time to stop updating the images
if (day > lastDay) {
clearInterval(dayInterval);
}
}

// Start the day counter using setInterval
const dayInterval = setInterval(updateDay, 500);



function waterPlant() {

const requestData = {
plant_health: plantHealth
};

fetch('/api/water', {
method: 'POST',
headers: {
    'Content-Type': 'application/json'
},
body: JSON.stringify(requestData)
})
.then(response => response.json())
.then(data => {
plantHealth = data.plant_health;
updatePlantHealth();
})
.catch(error => console.error('Error:', error));
startAnimation();
}

function giveSunlight() {
const requestData = {
plant_health: plantHealth
};

fetch('/api/sunlight', {
method: 'POST',
headers: {
    'Content-Type': 'application/json'
},
body: JSON.stringify(requestData)
})
.then(response => response.json())
.then(data => {
plantHealth = data.plant_health;
updatePlantHealth();
})
.catch(error => console.error('Error:', error));
}

function giveFertilizer() {
const requestData = {
plant_health: plantHealth
};

fetch('/api/fertilize', {
method: 'POST',
headers: {
    'Content-Type': 'application/json' 
},
body: JSON.stringify(requestData) 
})
.then(response => response.json())
.then(data => {
plantHealth = data.plant_health;
updatePlantHealth();
})
.catch(error => console.error('Error:', error));
}


function checkPlantHealth() {
    if (hasReceivedSunlight && hasReceivedFertilizer) {
        plantHealth += 0;
        hasReceivedSunlight = false;
        hasReceivedFertilizer = false;
        updatePlantHealth();
    }
}

function playAgain() {

    plantHealth = 100;
    dayCount = 1;

    document.getElementById('waterButton').disabled = false;
    document.getElementById('sunlightButton').disabled = false;
    document.getElementById('fertilizeButton').disabled = false;
    document.getElementById('waterButton').innerText = 'Water';
    document.getElementById('sunlightButton').hidden = false;
    document.getElementById('fertilizeButton').hidden = false;
    document.getElementById('waterButton').hidden = false;
  /*  document.getElementById('plant').style.backgroundColor = 'green'; */
    document.getElementById('playAgainButton').hidden = true;
    document.getElementById('plant').style.backgroundColor = disabled; 

    updatePlantHealth();
    updateDayCount();

}

setInterval(function() {
    if (plantHealth > 0) {
        plantHealth -= 5;
        updatePlantHealth();
    }
}, 1000); 


function startAnimation() {

const waterButton = document.getElementById('waterButton');
const waterDrops = document.querySelectorAll('.water-drop');

waterButton.addEventListener('click', () => {
waterDrops.forEach((drop, index) => {

const randomTop = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
const randomSpeed = Math.random() + 0.5
const horPosition = 30 + (index * 15); 
const randLeft = Math.floor(Math.random() * (55 - 45 + 1)) + 45;
drop.style.top = `${randomTop}%`; 
drop.style.bottom = `${horPosition}%`; 
drop.style.left = `${randLeft}%`; 
drop.style.animationDuration = `${randomSpeed}s`; 
drop.classList.add('animate');
});


setTimeout(() => {
waterDrops.forEach((drop) => drop.remove());
}, 2000); 
});


}