document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const formData = new FormData(form);

    // Convert FormData to URLSearchParams
    const data = new URLSearchParams();
    formData.forEach((value, key) => {
      data.append(key, value);
    });

    // Define the Form.io endpoint
    const formioUrl = "https://getform.io/f/bmdpjgga";

    // Send the form data to Form.io
    fetch(formioUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: data.toString(), // Convert data to string
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        // Handle success response
        alert("Message sent successfully!");
        form.reset(); // Reset the form fields
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error response
        alert("An error occurred while sending the message.");
      });
  });
});
