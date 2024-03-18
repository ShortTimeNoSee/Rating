const sliders = document.querySelectorAll(".slider");
const calculateBtn = document.getElementById("calculate-btn");
const ratingSpan = document.getElementById("rating");
const resetBtn = document.getElementById("reset-btn");

function handleSliderChange(event) {
  const slider = event.currentTarget.closest(".slider");
  const value = slider.querySelector(".value");
  value.textContent = event.currentTarget.value;
}

function calculateRating() {
  let total = 0;
  let count = 0;
  sliders.forEach((slider) => {
    const value = parseFloat(slider.querySelector(".value").textContent);
    const naBtn = slider.querySelector(".na-btn");
    if (!naBtn.classList.contains("selected")) {
      total += value;
      count++;
    }
  });
  const rating = (count > 0 ? (total / count).toFixed(1) : "-");
  ratingSpan.textContent = rating;
}

function resetSliders() {
  sliders.forEach((slider) => {
    const range = slider.querySelector(".range");
    const value = slider.querySelector(".value");
    const naBtn = slider.querySelector(".na-btn");
    range.value = 5;
    value.textContent = 5;
    naBtn.classList.remove("selected");
  });
  calculateRating();
}

sliders.forEach((slider) => {
  const range = slider.querySelector(".range");
  const naBtn = slider.querySelector(".na-btn");
  range.addEventListener("input", handleSliderChange);
  naBtn.addEventListener("click", () => {
    naBtn.classList.toggle("selected");
    calculateRating();
  });
});

calculateBtn.addEventListener("click", calculateRating);
resetBtn.addEventListener("click", resetSliders);
