document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("1qibKGoCsDNMXlNoR"); // Replace with your User ID
});

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const templateParams = {
    user_name: name,
    user_email: email,
    user_message: message,
  };

  emailjs
    .send("service_y3nskwd", "template_ftmaghi", templateParams)
    .then((response) => {
      alert("Email sent successfully!");
      contactForm.reset();
    })
    .catch((error) => {
      alert("Failed to send email. Please try again.");
      console.error("EmailJS Error:", error);
    });
});
