const discoverBtn = document.getElementById('discoverBtn');
const extraInfo = document.getElementById('extraInfo');
const closeBtn = document.getElementById('closeBtn');


discoverBtn.addEventListener('click', () => {
  extraInfo.style.display = 'block'; 
});

closeBtn.addEventListener('click', () => {
  extraInfo.style.display = 'none'; 
});


const banner = document.getElementById("banner");

window.onscroll = function() {
    if (window.scrollY > 50) {
        banner.classList.add("shrink");
    } else {
        banner.classList.remove("shrink");
    }
};





const bubble = document.getElementById('bubble');


function checkBubbleVisibility() {
    const rect = bubble.getBoundingClientRect();
    if (rect.top >= window.innerHeight || rect.bottom <= 0) {
        bubble.classList.add('hidden');
    } else {
        bubble.classList.remove('hidden');
    }
}
window.addEventListener('scroll', checkBubbleVisibility);


checkBubbleVisibility();




const container2 = document.getElementById('container2');

function checkcontainer2Visibility() {
    const rect = container2.getBoundingClientRect();
    if (rect.top >= window.innerHeight || rect.bottom <= 0) {
        container2.classList.add('hidden');
    } else {
        container2.classList.remove('hidden');
    }
}
window.addEventListener('scroll', checkcontainer2Visibility);

checkcontainer2Visibility();

const startChatBtn = document.getElementById('startChat');

startChatBtn.addEventListener('click', () => {
  alert("L'Éclat Intelligence a démarré ! 🤖");
})


document.addEventListener("DOMContentLoaded", function () {
    const points = document.getElementById('points');
    let i = 0;
    
    setInterval(() => {
    
        points.innerText = '.'.repeat(i % 3 + 1); 
        i++;
    }, 500);
});


const hour = document.getElementById('hour');
function checkhourVisibility() {
    const rect = hour.getBoundingClientRect();
    if (rect.top >= window.innerHeight || rect.bottom <= 0) {
        hour.classList.add('hidden');
    } else {
        hour.classList.remove('hidden');
    }
}

window.addEventListener('scroll', checkhourVisibility);

checkhourVisibility();