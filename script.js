const password = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");

// Character array (digitArray)
const digitArray = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M',
  'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z',
  '0','1','2','3','4','5','6','7','8','9',
  '!','@','#','$','%','^','&','*'
];

// Generate random password
function generatePassword() {
  let generated = "";
  const length = 12; // Password length

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * digitArray.length);
    generated += digitArray[randomIndex];
  }

  password.value = generated;
}

// Copy password to clipboard
function copyPassword(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      copyBtn.textContent = "Copied!";
      setTimeout(() => copyBtn.textContent = "Copy", 1500);
    })
    .catch(err => console.log(err.message));
}

// Event listeners
generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", () => copyPassword(password.value));
