"use strict";

// Menu toogle

document.addEventListener("click", documentClick);

function documentClick(e) {
	const targetItem = e.target;
	if (targetItem.closest(".menu")) {
		document.documentElement.classList.toggle("menu-opend");
	}
}

// Slider - code

const slider = document.querySelector(".slider");

let pressed = false,
	startX;

slider.addEventListener("mousedown", (e) => {
	pressed = true;
	startX = e.clientX;
	e.target.style.cursor = "grabbing";
	e.preventDefault();
});

window.addEventListener("mouseup", () => {
	pressed = false;
});

slider.addEventListener("mouseleave", () => {
	pressed = false;
	e.target.cursor = "pointer";
});

slider.addEventListener("mousemove", function (e) {
	if (!pressed) return;
	this.scrollLeft += 5 * (startX - e.clientX);
});

// IntersectionObserver

const sections = document.querySelectorAll("section");
const options = {
	rootMargin: "0px 300px",
};

const observer = new IntersectionObserver(function (entires, observer) {
	entires.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.style.transition = "transform 1s ease";
			entry.target.style.transform = "translateX(0%)";
		}
	});
}, options);

sections.forEach((section) => {
	observer.observe(section);
});
