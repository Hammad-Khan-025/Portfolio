let barButton = document.querySelector('.bar-btn');
let dropDown = document.querySelector('.dropdown');
let listBtn = document.querySelectorAll('.listBtn');


let viewCv = document.getElementById("viewCvBtn");
viewCv.addEventListener("click", () => {
    const link = document.createElement('a');
    link.href = 'Hammad_CV.pdf'; // Path to your CV PDF file
    link.download = 'Hammad_CV.pdf'; // The name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

//   close all list items when any one is clicked in mobile mode
listBtn.forEach((items)=>{
    items.addEventListener("click", ()=>{
            dropDown.classList.remove('show-height')
            barButton.innerHTML = `<i class="fa-solid fa-bars"></i>`
    })
})

//  toggle button
barButton.addEventListener('click', () => {
    if(dropDown.classList.contains('show-height')){
        dropDown.classList.remove('show-height')
        barButton.innerHTML = `<i class="fa-solid fa-bars"></i>`
    }
    else{
        dropDown.classList.add('show-height')
        // barButton.classList.add('rotate')
        barButton.innerHTML = `<i class="fa-solid fa-xmark rotate"></i>`
        // After a delay, remove the rotate class to stop rotation
        setTimeout(() => {
            barButton.innerHTML = `<i class="fa-solid fa-xmark"></i>`; // Remove rotate class after 1 rotation
        }, 1000);
    }

})

// scroll reveal effects

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
  });

  ScrollReveal().reveal('.reveal-top', { origin: 'top' });
  ScrollReveal().reveal('.reveal-bottom', { origin: 'bottom' });


// Get the button element
var scrollButton = document.querySelector('.fixed-button');

// Function to toggle button visibility based on scroll position
function toggleScrollButton() {
    if (window.scrollY > 500) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
}

// Attach the toggle function to the scroll event
window.addEventListener('scroll', toggleScrollButton);

// Trigger the toggle function initially to handle the initial state
toggleScrollButton();



// contact alert modal
const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2')
const input3 = document.querySelector('.input3')
const input4 = document.querySelector('.input4')
const input5 = document.querySelector('.input5')
const messageBtn = document.querySelector('.message')

messageBtn.addEventListener('click',()=>{
    if(input1.value === "" || input2.value === "" || input3.value === "" || input4.value === "" || input5.value === ""){
        alert("Please fill out the empty fields")
    }
    else {
        window.location.href = "success.html";
        clearInputFields()
    }
})

function clearInputFields() {
    input1.value = '';
    input2.value = '';
    input3.value = '';
    input4.value = '';
    input5.value = '';
}
window.addEventListener('beforeunload', clearInputFields);

