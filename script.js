const app = document.getElementById("app");

const memories = [
  {
    title: "The Day Everything Began 💫",
    image: "photo1.jpg",
    message: "This was the moment everything changed."
  },
  {
    title: "Our Favorite Memory 🌸",
    image: "photo2.jpg",
    message: "With you, everything feels magical."
  },
  {
    title: "Us Being Us ❤️",
    image: "photo3.jpg",
    message: "Laughing, dreaming, growing — together."
  }
];

let started = false;
let doorIndex = 0;

function render() {
  app.innerHTML = "";

  if (!started) {
    app.innerHTML = `
      <div class="card">
        <h1>I Built Something For You ❤️</h1>
        <button onclick="start()">Enter</button>
      </div>
    `;
    return;
  }

  if (doorIndex < memories.length) {
    app.innerHTML = `
      <div class="card">
        <h2>Door ${doorIndex + 1}</h2>
        <button onclick="openDoor()">Open Door 🚪</button>
      </div>
    `;
  } else {
    app.innerHTML = `
      <div class="card">
        <h2>Will you be my Valentine? ❤️</h2>
        <button onclick="sayYes()">Yes 😍</button>
        <button class="secondary" onclick="sayMaybe()">Maybe 🙈</button>
        <div id="maybeMessage"></div>
      </div>
    `;
  }
}

function start() {
  started = true;
  render();
}

function openDoor() {
  const memory = memories[doorIndex];
  app.innerHTML = `
    <div class="popup">
      <div class="card">
        <h3>${memory.title}</h3>
        <img src="${memory.image}" />
        <p>${memory.message}</p>
        <button onclick="nextDoor()">Next ❤️</button>
      </div>
    </div>
  `;
}

function nextDoor() {
  doorIndex++;
  render();
}

function sayMaybe() {
  document.getElementById("maybeMessage").innerHTML =
    "Sorry 😌 this option was closed 1325 days ago ❤️";
}

function sayYes() {
  app.innerHTML = `
    <div class="card">
      <h1>LOVE YOU CHADDI ❤️</h1>
    </div>
  `;

  launchConfetti();
}

render();

function launchConfetti() {
  const colors = ["#e63946", "#ff69b4", "#ffd700", "#ff1493", "#ff6347"];

  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti-piece");

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = (Math.random() * 2 + 2) + "s";

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 4000);
  }
}

