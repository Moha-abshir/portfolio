const words = [
  "Web Developer",
  "UI/UX Designer",
  "Good Communicator",
 ];

  let wordIndex = 0;
  let charIndex = 0;
  let currentText = "";
  let isDeleting = false;

  function typeEffect() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
  currentText = currentWord.substring(0, charIndex--);
  } else {
  currentText = currentWord.substring(0, charIndex++);
  }

  document.querySelector(".skills").textContent = currentText;

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentWord.length) {
  speed = 1500;
  isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
  isDeleting = false;
  wordIndex = (wordIndex + 1) % words.length;
  speed = 500; 
  }

  setTimeout(typeEffect, speed);
  }

  typeEffect();

function bookAcall(){
  const phoneNumber ="254794097062";
  const message = "Greetings! I's love to book a quick call with you.";
  const encodedMessage = encodeURIComponent(message);

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, "_blank")
}


const tagBtn = document.querySelectorAll('.navBut-js');
const showCase = document.querySelectorAll('.showCase-js');

tagBtn.forEach((tag, index) => {
  tag.addEventListener('click', () => {
    tagBtn.forEach(btn => btn.classList.remove('active')); 
    tag.classList.add('active');
    showCase.forEach(content => content.classList.remove('active'))
    showCase[index].classList.add('active');
  });
});

function ScheduleCall(){
  const phoneNumber = '254794097062';
  const message = "Hi there. I have a project in mind that i'd love to do with you";
  const encodedMessage = encodeURIComponent(message);

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, "_blank");
}

const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const responsiveNav = document.querySelector('.responsive-nav');
const hideNav = document.querySelectorAll('.hide-nav');

hamburger.addEventListener('click', ()=>{
  responsiveNav.classList.toggle('show');
  hamburger.classList.add('hide');
  close.classList.add('show');
})
close.addEventListener('click', ()=>{
  responsiveNav.classList.toggle('show');
  close.classList.remove('show');
  hamburger.classList.remove('hide');
})
hideNav.forEach((item)=>{
  item.addEventListener('click', ()=>{
    responsiveNav.classList.remove('show');
    close.classList.remove('show');
    hamburger.classList.remove('hide');
  })
})