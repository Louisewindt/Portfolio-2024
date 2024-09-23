function runRiveLogic(r) {
    // Access the State Machine inputs for "State Machine 1"
    const inputs = r.stateMachineInputs("State Machine 1");
  
    // Find the specific boolean inputs in your state machine
    const lookAtFieldTrigger = inputs.find(input => input.name === "LookAtField trigger");
    const coverEyesTrigger = inputs.find(input => input.name === "CoverEyes trigger");
    const peekOneEyeTrigger = inputs.find(input => input.name === "PeekOneEye trigger");
  
    // Reference HTML input fields
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    const showPasswordButton = document.getElementById('show-password');
  
    // Trigger "LookAtField" when the username field is clicked
    usernameField.addEventListener('focus', () => {
      if (lookAtFieldTrigger) {
        lookAtFieldTrigger.value = true;
        console.log("LookAtField animation triggered on username focus.");
        
        // Reset after short delay
        setTimeout(() => {
          lookAtFieldTrigger.value = false;
          console.log("LookAtField reset.");
        }, 1000); // Adjust the delay to match your animation length
      }
    });
  
    // Trigger "CoverEyes" when the password field is clicked
    passwordField.addEventListener('focus', () => {
      if (coverEyesTrigger) {
        coverEyesTrigger.value = true;
        console.log("CoverEyes animation triggered on password focus.");
        
        // Reset after short delay
        setTimeout(() => {
          coverEyesTrigger.value = false;
          console.log("CoverEyes reset.");
        }, 1000);
      }
    });
  
    // Trigger "PeekOneEye" when the "show password" button is clicked
    showPasswordButton.addEventListener('click', () => {
      if (peekOneEyeTrigger) {
        peekOneEyeTrigger.value = true;
        console.log("PeekOneEye animation triggered on show password click.");
        
        // Reset after short delay
        setTimeout(() => {
          peekOneEyeTrigger.value = false;
          console.log("PeekOneEye reset.");
        }, 1000);
      }
  
      // Toggle password visibility
      if (passwordField.type === "password") {
        passwordField.type = "text"; // Show the password
      } else {
        passwordField.type = "password"; // Hide the password again
      }
    });
  }
  