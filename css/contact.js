const form = document.querySelector("#form");
const successMessage = document.querySelector("#successMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  // Display success message
  successMessage.style.display = "block";

  // Reset the form after 2 seconds
  setTimeout(() => {
    form.reset();
    successMessage.style.display = "none"; 
  }, 2000);
});
