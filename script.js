
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 7000); 
};

var form = document.getElementById('myForm');


form.addEventListener('submit', function(event)  {
    event.preventDefault();

    var name = document.getElementById('name').value;
    console.log(name)
    var email = document.getElementById('email').value;
    console.log(email)
    var feedback = document.getElementById('feedback').value; 
     console.log(feedback)
  
     
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('feedback', feedback);
     
});
