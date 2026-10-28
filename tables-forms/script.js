document.querySelector("#voyager-form").addEventListener("submit", function (event) {
  event.preventDefault();
  document.querySelector("#form-feedback").textContent = "Form checked. No answers were sent or saved.";
});
