const sliders = document.querySelectorAll(".slider");
const calculateBtn = document.getElementById("calculate-btn");
const ratingSpan = document.getElementById("rating");
const unitCircleContainer = document.getElementById("unit-circle-container");

function drawUnitCircle(rating) {
    const svgSize = 200;
    const radius = svgSize / 2;
    const centerX = radius;
    const centerY = radius;
    const angle = rating * 2 * Math.PI;
    const pointX = centerX + radius * Math.cos(angle);
    const pointY = centerY + radius * Math.sin(angle);

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", svgSize);
    svg.setAttribute("height", svgSize);

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", centerX);
    circle.setAttribute("cy", centerY);
    circle.setAttribute("r", radius);
    circle.setAttribute("stroke", "black");
    circle.setAttribute("fill", "none");

    const point = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    point.setAttribute("cx", pointX);
    point.setAttribute("cy", pointY);
    point.setAttribute("r", 5);
    point.setAttribute("fill", "red");

    svg.appendChild(circle);
    svg.appendChild(point);

    unitCircleContainer.innerHTML = "";
    unitCircleContainer.appendChild(svg);
}

calculateBtn.addEventListener("click", () => {
    let total = 0;
    let count = 0;
    sliders.forEach((slider) => {
        const value = parseFloat(slider.querySelector(".value").textContent.replace("π", ""));
        if (!slider.querySelector(".na-btn").classList.contains("selected")) {
            total += value;
            count++;
        }
    });
    const rating = (count > 0 ? (total / count) : 0);
    ratingSpan.textContent = rating.toFixed(2);
    drawUnitCircle(rating);
});

sliders.forEach((slider) => {
    const range = slider.querySelector(".range");
    const value = slider.querySelector(".value");
    const naBtn = slider.querySelector(".na-btn");
    value.textContent = (range.value / Math.PI).toFixed(2) + "π"; // Display value with 'π' symbol
    range.addEventListener("input", () => {
        value.textContent = (range.value / Math.PI).toFixed(2) + "π"; // Display value with 'π' symbol
    });
    naBtn.addEventListener("click", () => {
        naBtn.classList.toggle("selected");
    });
});
