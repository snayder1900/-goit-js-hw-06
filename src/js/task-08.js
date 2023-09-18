const loginForm = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();

  const form = event.target;
  const emailInput = form.elements.email;
  const passwordInput = form.elements.password;

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email === "" || password === "") {
    alert("Todos los espacios deben ser rellenados.");
    return;
  }

  const formData = {
    email,
    password
  }

  console.log(formData);
  form.reset();
}

loginForm.addEventListener("submit", handleSubmit);
