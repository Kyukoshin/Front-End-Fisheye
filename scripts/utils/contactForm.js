function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

function closeLightbox() {
    const modal = document.getElementById("lightbox");
    modal.style.display = "none";
}

var surnameInput = document.getElementById('prenom');
var nameInput = document.getElementById('nom');
var emailInput = document.getElementById('email');
var messageInput = document.getElementById('message');

document.querySelector('form').addEventListener('submit', function (e) {

    e.preventDefault();

    console.log(surnameInput.value); 
    console.log(nameInput.value);
    console.log(emailInput.value);
    console.log(messageInput.value); 
    closeModal();  
});

function mediaIndex(x) {
    console.log(x)
}

function displayLightBox() {
    document.getElementById("lightbox").style.display = "block";
    const anchor = document.getElementById("lightbox");
    
    const close = document.createElement('a');
    close.setAttribute("class","lightbox-close-btn fa-solid fa-xmark fa-2xl");
    close.setAttribute("onclick","closeLightbox()");

    const previous = document.createElement('a');
    previous.setAttribute("class","prev fa-solid fa-chevron-left fa-2xl");
    previous.setAttribute("onclick","slideChange(-1)");

    const next = document.createElement('a');
    next.setAttribute("class","next fa-solid fa-chevron-right fa-2xl");
    next.setAttribute("onclick","slideChange(1)");

    anchor.appendChild(close);
    anchor.appendChild(next);
    anchor.appendChild(previous);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function slideChange(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("lightboxImage");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

document.body.onkeyup = function(e) {
    if (e.keyCode == 32 || e.keyCode == 27) 
    {
        closeLightbox();
        closeModal()
    }
    if (e.keyCode == 37 || e.keyCode == 81 || e.keyCode == 74) 
    {
        slideChange(-1)
    }
    if (e.keyCode == 39 || e.keyCode == 68 || e.keyCode == 76) 
    {
        slideChange(1)
    }
  }
