const ratingSpan = document.getElementById("rating");

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
    const rating = (count > 0 ? (total / count).toFixed(2) : "-");
    ratingSpan.textContent = rating + "π";
});

sliders.forEach((slider) => {
