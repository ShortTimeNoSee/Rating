const sliders = document.querySelectorAll(".slider");
const calculateBtn = document.getElementById("calculate-btn");
const ratingSpan = document.getElementById("rating");

function decimalToFraction(value) {
  const fractions = [
    "0",
    "π/15",
    "π/7.5",
    "π/5",
    "π/4",
    "π/3",
    "5π/12",
    "7π/18",
    "2π/5",
    "π/2",
    "9π/18",
    "5π/9",
    "11π/18",
    "7π/12",
    "2π/3",
    "5π/6",
    "13π/15",
    "7π/8",
    "3π/2",
    "17π/10",
    "19π/15",
    "23π/12",
    "25π/18",
    "4π/3",
    "27π/18",
    "29π/15",
    "31π/12",
    "11π/6",
    "37π/15",
    "2π"
  ];
  const index = Math.round((value * 30) / (2 * Math.PI));
  return fractions[index];
}

sliders.forEach((slider) => {
  const range = slider.querySelector(".range");
  const value = slider.querySelector(".value");
  const naBtn = slider.querySelector(".na-btn");
  value.textContent = decimalToFraction(range.value);
  range.addEventListener("input", () => {
    value.textContent = decimalToFraction(range.value);
  });
  naBtn.addEventListener("click", () => {
    naBtn.classList.toggle("selected");
  });
});

calculateBtn.addEventListener("click", () => {
  let total = 0;
  let count = 0;
  sliders.forEach((slider) => {
    const value = decimalToFraction(slider.querySelector(".value").textContent.replace("π", "") * Math.PI);
    if (!slider.querySelector(".na-btn").classList.contains("selected")) {
      total += value;
      count++;
    }
  });
  const rating = count > 0 ? decimalToFraction(total / count) : "-";
  ratingSpan.textContent = rating;
});
