function validateForm() {
  let valid = true;

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  document.getElementById("userError").textContent = "";
  document.getElementById("passError").textContent = "";

  if (username === "") {
    document.getElementById("userError").textContent = "Username required";
    valid = false;
  }

  if (password.length < 6) {
    document.getElementById("passError").textContent =
      "Password must be at least 6 characters";
    valid = false;
  }

  return valid;
}
