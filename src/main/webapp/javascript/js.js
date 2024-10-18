/**
 * 
 */
function validatePassword() {
      var password = document.getElementById("password").value;
      var confirmPassword = document.getElementById("confirm-password").value;

      if (password !== confirmPassword) {
          alert("Las contraseñas no coinciden.");
          return false;  // Evita que el formulario se envíe
      }
      return true;  // Permite que el formulario se envíe si coinciden
  }