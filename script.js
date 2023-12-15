// Set the width of the sidebar to 250px (show it) //
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

// Set the width of the sidebar to 0 (hide it) //
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";

}

function changeBackgroundImage() {
  document.body.style.backgroundImage = "url('hotel-night.jpeg')";
  document.getElementById("mySidepanel").style.backgroundColor = "black";
  document.getElementsByClassName("sidepanel").style.color = "white";
}

const signupForm = document.getElementById('signupForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const passwordRetype = document.getElementById('repassword')
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

signupForm.addEventListener('submit', function(event) {
  let isValid = true;

  if (usernameInput.value === '') {
    usernameError.textContent = 'Username is required';
    isValid = false;
  } else {
    usernameError.textContent = '';
  }

  if (emailInput.value === '') {
    emailError.textContent = 'Email is required';
    isValid = false;
  } else {
    emailError.textContent = '';
  }

  if (passwordInput.value === '') {
    passwordError.textContent = 'Password is required';
    isValid = false;
  } else {
    passwordError.textContent = '';
  }

  if (passwordRetype.value === '' || passwordRetype === passwordInput) {
    passwordError.textContent = 'Password is required';
    isValid = false;
  } else {
    passwordError.textContent = '';
  }

  if (!isValid) {
    event.preventDefault();
  }
});

usernameInput.addEventListener('focus', function() {
  usernameInput.style.border = '2px solid #007bff';
});
usernameInput.addEventListener('blur', function() {
  usernameInput.style.border = '1px solid #ccc';
});

emailInput.addEventListener('input', function() {
  emailError.textContent = '';
});

passwordInput.addEventListener('input', function() {
  if (passwordInput.value.length < 6) {
    passwordInput.setAttribute('maxlength', '6');
  } else {
    passwordInput.removeAttribute('maxlength');
  }
});

passwordRetype.addEventListener('input', function() {
  if (passwordInput.value.length < 6) {
    passwordInput.setAttribute('maxlength', '6');
  } else {
    passwordInput.removeAttribute('maxlength');
  }
});

