const sliders = document.querySelectorAll(".slider");
const calculateBtn = document.getElementById("calculate-btn");
const ratingSpan = document.getElementById("rating");

calculateBtn.addEventListener("click", () => {
	let total = 0;
	let count = 0; // tracks the number of non-"N/A" sliders
	sliders.forEach((slider) => {
		const value = parseFloat(slider.querySelector(".value").textContent);
		if (!slider.querySelector(".na-btn").classList.contains("selected")) {
			total += value;
			count++;
		}
	});
	const rating = (count > 0 ? (total / count).toFixed(1) : "-");
	ratingSpan.textContent = rating;
});

sliders.forEach((slider) => {
    const range = slider.querySelector(".range");
    const value = slider.querySelector(".value");
    const naBtn = slider.querySelector(".na-btn");
    value.textContent = range.value;
    range.addEventListener("input", () => {
        value.textContent = range.value;
    });
    naBtn.addEventListener("click", () => {
        naBtn.classList.toggle("selected");
    });
});
