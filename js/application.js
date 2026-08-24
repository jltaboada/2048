// Ano actual del footer (sustituye al valor estatico del HTML)
document.getElementById("footer-year").textContent = new Date().getFullYear();

// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});
