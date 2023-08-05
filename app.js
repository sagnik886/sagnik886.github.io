(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
function submitForm(event) {
    event.preventDefault(); // Prevent form submission to the default action (same page)
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
  
    const formData = {
      name: name,
      email: email,
      subject: subject,
      message: message
    };
  
    // Send form data to the backend using AJAX
    fetch('https://your-backend-url/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data); // handling the response from the server here
      alert('Form submitted successfully!');
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to submit form.');
    });
  }
  
