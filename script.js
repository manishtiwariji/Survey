document.getElementById('surveyForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  // Get the name entered in the form
  var name = document.getElementById('name').value;
  // Show the popup message
  alert('Thank you for your feedback, ' + name + '!');
});
