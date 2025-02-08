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

// Rejestracja pluginu ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

// GSAP ANIMATION
const timeline = gsap.timeline({
	defaults: { duration: 1, ease: "linear" },
})

timeline
	.from("header > *", { y: "-100%", opacity: 0, stagger: 0.3 })
	.from(".home-text h5", { x: "-100%", opacity: 0 }, "-=0.7")
	.from(".home-text h1", { x: "-100%", opacity: 0 }, "-=0.6")
	.from(".home-text p", { x: "-100%", opacity: 0 }, "-=0.5")
	.to(".btn1", { opacity: 1, x: "0" }, "-=0.4")
	.from(".icons > *", { opacity: 0, stagger: 0.2 }, "-=0.8")

gsap.from(".feature-content > *", {
	opacity: 0,
	y: "50%",
	clearProps: "all",
	stagger: 0.2,
	scrollTrigger: {
		trigger: ".feature-content",
		start: "top 99%",
	},
})

gsap.from(".holiday-img.img1", {
	opacity: 0,
	x: "-100%",
	rotate: 25,
	duration: 1,
	scrollTrigger: {
		trigger: ".holiday-img.img1",
		start: "top 80%",
	},
})

gsap.from(".holiday-text.text1 > *", {
	opacity: 0,
	x: "100%",
	duration: 1,
	stagger: 0.3,
	scrollTrigger: {
		trigger: ".holiday-img.img1",
		start: "top 80%",
	},
})
gsap.from(".holiday-img.img2", {
	opacity: 0,
	x: "100%",
	rotate: 25,
	duration: 1,
	scrollTrigger: {
		trigger: ".holiday-img.img2",
		start: "top 80%",
	},
})

gsap.from(".holiday-text.text2 > *", {
	opacity: 0,
	x: "-100%",
	duration: 1,
	stagger: 0.3,
	scrollTrigger: {
		trigger: ".holiday-img.img2",
		start: "top 80%",
	},
})
gsap.from(".holiday-img.img3", {
	opacity: 0,
	x: "-100%",
	rotate: 25,

	duration: 1,
	scrollTrigger: {
		trigger: ".holiday-img.img3",
		start: "top 80%",
	},
})

gsap.from(".holiday-text.text3 > *", {
	opacity: 0,
	x: "100%",
	duration: 1,
	stagger: 0.3,
	scrollTrigger: {
		trigger: ".holiday-img.img3",
		start: "top 85%",
	},
})

gsap.from(".popular .center-text", {
	opacity: 0,
	x: "100%",
	duration: 1,
	stagger: 0.3,
	scrollTrigger: {
		trigger: ".popular",
		start: "top 85%",
	},
})

gsap.from(".tour-content > *", {
	opacity: 0,
	y: "100%",
	duration: 1,
	rotate: 25,
	stagger: 0.3,
	scrollTrigger: {
		trigger: ".popular",
		start: "top 90%",
	},
})
gsap.from(".center-btn", {
	opacity: 0,
	y: "100%",
	duration: 1,
	rotate: 25,
	stagger: 0.3,
	scrollTrigger: {
		trigger: ".center-btn",
		start: "top 80%",
	},
})
gsap.from(".information .center-text", {
	opacity: 0,
	x: "100%",
	duration: 1,
	stagger: 0.3,
	scrollTrigger: {
		trigger: ".information",
		start: "top 90%",
	},
})

gsap.from(".info-container .box1", {
	opacity: 0,
	x: "-100%",
	rotate: 25,
	duration: 1,
	scrollTrigger: {
		trigger: ".info-container",
		start: "top 90%",
	},
})
gsap.from(".info-container .box2", {
	opacity: 0,
	x: "100%",
	rotate: 25,
	duration: 1,
	scrollTrigger: {
		trigger: ".info-container",
		start: "top 90%",
	},
})
gsap.from(".info-container .box3", {
	opacity: 0,
	x: "-100%",
	y: "100%",
	rotate: 25,
	duration: 1,
	scrollTrigger: {
		trigger: ".info-container",
		start: "top 90%",
	},
})

gsap.from(".info-container .box4", {
	opacity: 0,
	x: "100%",
	y: "100%",
	rotate: 25,
	duration: 1,
	scrollTrigger: {
		trigger: ".info-container",
		start: "top 90%",
	},
})

gsap.from(".news-content .text-box", {
	opacity: 0,
	duration: 1,
	x: "-100%",
	scrollTrigger: {
		trigger: ".news-content",
		start: "top 90%",
	},
})

gsap.from(".news-content form", {
	opacity: 0,
	duration: 1,
	x: "100%",
	scrollTrigger: {
		trigger: ".news-content",
		start: "top 90%",
	},
})

gsap.from(".footer .logo", {
	opacity: 0,
	duration: 1,
	y: "100%",
	scrollTrigger: {
		trigger: ".footer",
		start: "top 90%",
	},
})


gsap.from(".footer .bottom-content span",{
	opacity: 0,
	x:"-100%",
	duration: 1.2,
	stagger: 0.3,
	scrollTrigger: {
		trigger: ".footer",
		start: "top 90%",
	},
})
gsap.from(".footer .bottom-content .socials > *",{
	opacity: 0,
	x:"100%",
	duration: 1.2,
	stagger: 0.2,
	delay: 0.3,
	scrollTrigger: {
		trigger: ".footer",
		start: "top 60%",
	},
})

