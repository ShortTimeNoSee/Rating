const sliders = document.querySelectorAll(".slider");
const calculateBtn = document.getElementById("calculate-btn");
const ratingSpan = document.getElementById("rating");

calculateBtn.addEventListener("click", () => {
  let total = 0;
  sliders.forEach((slider) => {
    const value = parseFloat(slider.querySelector(".value").textContent);
    total += value;
  });
  const rating = (total / sliders.length).toFixed(1);
  ratingSpan.textContent = rating;
});

sliders.forEach((slider) => {
  const range = slider.querySelector(".range");
  const value = slider.querySelector(".value");
  value.textContent = range.value;
  range.addEventListener("input", () => {
    value.textContent = range.value;
  });
});
