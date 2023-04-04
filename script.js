const sliders = document.querySelectorAll(".slider");
const calculateBtn = document.getElementById("calculate-btn");
const ratingSpan = document.getElementById("rating");
const tooltipPadding = 10; // adjust this value to change the spacing between the label and tooltip

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
    const label = slider.querySelector(".label"); // add this line
    const tooltip = label.querySelector(".tooltip"); // add this line
    const naBtn = slider.querySelector(".na-btn");
    value.textContent = range.value;
    range.addEventListener("input", () => {
        value.textContent = range.value;
    });

    label.addEventListener("mouseover", () => { // modify this event listener
        const labelRect = label.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        const distanceFromLeftEdge = labelRect.left;
        let tooltipLeft = distanceFromLeftEdge + labelRect.width + tooltipPadding;
        if (tooltipLeft + tooltipRect.width > window.innerWidth) {
            tooltipLeft = window.innerWidth - tooltipRect.width;
        }
        tooltip.style.top = `${labelRect.top - tooltipRect.height}px`;
        tooltip.style.left = `${tooltipLeft}px`;
    });
});
