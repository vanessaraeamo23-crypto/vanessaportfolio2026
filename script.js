setInterval(() => {
  document.body.classList.add("glitch-active");

  setTimeout(() => {
    document.body.classList.remove("glitch-active");
  }, 200);
}, 3000);
