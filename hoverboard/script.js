const container = document.getElementById("container");
const colorScheme = document.getElementById("colorScheme");
const colorSchemes = {
  neon: ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"],

  warm: ["#ff4757", "#ff6348", "#ffa502", "#ff7f50", "#ff6b81"],

  cool: ["#00cec9", "#0984e3", "#6c5ce7", "#74b9ff", "#81ecec"],

  pastel: ["#ffb6c1", "#dda0dd", "#add8e6", "#f7dc6f", "#98fb98"],

  rainbow: ["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#8b00ff"],
};
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}

colorScheme.addEventListener("change", () => {
  resetSquares();
});

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  const colors = colorSchemes[colorScheme.value];

  return colors[Math.floor(Math.random() * colors.length)];
}

function resetSquares() {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    removeColor(square);
  });
}
