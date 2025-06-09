const textList = [
  "Gửi đến emm ❤️", "Emm là mặt trời của anhh ☀️", 
  "Cảm ơn emm đã đến bên anhh 💖", "Quan tâm và chăm sóc anhh 💑", 
  "Chúc emm mọi điều tốt đẹp sẽ đến với em 🌸", "Em là ebe đẹp nhứt 💕"
];

const colors = ["neon-red", "neon-green", "neon-blue", "neon-purple", "neon-yellow"];
const imageSources = ["images/Love1.jpg", "images/Love2.jpg", "images/Love3.jpg"];

function createFallingText() {
  const text = document.createElement("p");
  text.classList.add("falling-text", colors[Math.floor(Math.random() * colors.length)]);
  text.innerText = textList[Math.floor(Math.random() * textList.length)];
  text.style.left = `${Math.random() * 100}vw`;
  document.body.appendChild(text);
  setTimeout(() => text.remove(), 7000);
}

function createFallingImage() {
  const img = document.createElement("img");
  img.src = imageSources[Math.floor(Math.random() * imageSources.length)];
  img.classList.add("gallery-image");
  img.style.left = `${Math.random() * 100}vw`;
  img.style.animationDuration = `${4 + Math.random() * 4}s`;
  document.body.appendChild(img);
  setTimeout(() => img.remove(), 7000);
}

setInterval(() => {
  for (let i = 0; i < 3; i++) createFallingText();
}, 300);

setInterval(() => {
  for (let i = 0; i < 3; i++) createFallingImage();
}, 350);
