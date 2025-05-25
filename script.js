function getSelectedModel() {
  const radios = document.getElementsByName("model");
  for (let radio of radios) {
    if (radio.checked) return radio.value;
  }
}

function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  const chatBox = document.getElementById("chat-box");

  if (!message) return;

  // Show user message
  const userMsg = document.createElement("div");
  userMsg.textContent = "You: " + message;
  chatBox.appendChild(userMsg);

  // Mock AI response
  const model = getSelectedModel();
  if (model === "ChatGPT" || model === "Both") {
    const botMsg = document.createElement("div");
    botMsg.textContent = "ChatGPT: [Mock response to '" + message + "']";
    chatBox.appendChild(botMsg);
  }

  if (model === "Gemini" || model === "Both") {
    const botMsg = document.createElement("div");
    botMsg.textContent = "Gemini: [Mock response to '" + message + "']";
    chatBox.appendChild(botMsg);
  }

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await firebaseApp.signInWithEmailAndPassword(firebaseApp.auth, email, password);
    document.getElementById("auth-section").style.display = "none";
    document.getElementById("chat-section").style.display = "block";
  } catch (err) {
    alert("Login failed: " + err.message);
  }
}

async function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await firebaseApp.createUserWithEmailAndPassword(firebaseApp.auth, email, password);
    alert("Account created. You can now log in.");
  } catch (err) {
    alert("Signup failed: " + err.message);
  }
}
