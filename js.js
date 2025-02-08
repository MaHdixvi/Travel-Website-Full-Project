function openSidebar() {
	const sidebar = document.querySelector(".sidebar")
	sidebar.classList.add("open")
}

function closeSidebar() {
	const sidebar = document.querySelector(".sidebar")
	sidebar.classList.remove("open")
}

const header = document.querySelector("header")

window.addEventListener("scroll", function () {
	header.classList.toggle("sticky", window.scrollY > 20)
})

// Zapisz pozycję scrolla przed odświeżeniem
window.addEventListener("beforeunload", () => {
	localStorage.setItem("scrollPosition", window.scrollY)
})

// Przywróć pozycję scrolla po załadowaniu strony
window.addEventListener("load", () => {
	const scrollPosition = localStorage.getItem("scrollPosition")
	if (scrollPosition) {
		window.scrollTo(0, scrollPosition)
	}
})
