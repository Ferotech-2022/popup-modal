// Get the modal and the button that opens it
var modal = document.getElementById('myModal');
var btn = document.getElementById('openModalBtn');
var closeBtn = document.querySelector('.close');

// When the button is clicked, open the modal
btn.addEventListener('click', function() {
  modal.style.display = 'block';
});

// When the close button is clicked, close the modal
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
