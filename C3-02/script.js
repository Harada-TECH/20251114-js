/* ランダムに変化 */
const btnRandom = document.querySelector("#fade-button-random");
btnRandom.addEventListener("click", () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  btnRandom.style.backgroundColor = randomColor;
});
