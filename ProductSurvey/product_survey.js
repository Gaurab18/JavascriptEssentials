const submitButton = document.getElementById('submitBtn')

submitButton.onclick = submitFeedback;

function submitFeedback(){

    //since using event listener in js so required field doesnt worl therefore used this eventlistener.
    document.getElementById('myForm').addEventListener('submit', function (event) {
        if (!this.checkValidity()) {
          event.preventDefault(); // Prevent submission if the form is invalid
          alert('Please fill out the required fields.');
        }

    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const experince = document.getElementById('experinceText').value;

    //update the content 
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    document.getElementById('userExperince').innerHTML = experince;

    // Show the user info section
    document.getElementById('userInfo').style.display = 'block';

    alert('Thank you for your valuable feedback')
}

//when user press enter with keyboard , adding event listener
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });
