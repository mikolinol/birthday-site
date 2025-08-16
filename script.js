document.getElementById("surpriseBtn").addEventListener("click", () => {
  const surprise = document.getElementById("surprise");

  for (let i = 0; i < 20; i++) {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight - 50 + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
});
