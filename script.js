// JavaScript for Caesar Cipher functionality

// Function to encrypt text
function encryptText() {
    const plainText = document.getElementById("plain-text").value;
    const shift = parseInt(document.getElementById("shift").value);
    if (isNaN(shift)) {
      alert("Please enter a valid shift value.");
      return;
    }
    const cipherText = caesarCipher(plainText, shift);
    document.getElementById("cipher-text").value = cipherText;
  }
  
  // Function to decrypt text
  function decryptText() {
    const cipherText = document.getElementById("cipher-text-decrypt").value;
    const shift = parseInt(document.getElementById("shift-decrypt").value);
    if (isNaN(shift)) {
      alert("Please enter a valid shift value.");
      return;
    }
    const plainText = caesarCipher(cipherText, -shift);
    document.getElementById("plain-text-decrypt").value = plainText;
  }
  
  // Caesar Cipher implementation
  function caesarCipher(text, shift) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
  
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (alphabet.includes(char)) {
        const index = (alphabet.indexOf(char) + shift + 26) % 26;
        result += alphabet[index];
      } else if (alphabetUpper.includes(char)) {
        const index = (alphabetUpper.indexOf(char) + shift + 26) % 26;
        result += alphabetUpper[index];
      } else {
        result += char; // Non-alphabetic characters remain unchanged
      }
    }
  
    return result;
  }
  