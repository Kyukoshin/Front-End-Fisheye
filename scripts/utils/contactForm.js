function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
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
