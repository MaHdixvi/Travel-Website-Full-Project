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

gsap.from("header .logo", {
	opacity: 0,
	y: "-100%",
	scrollTrigger: {
		trigger: ".home",
		start: "top 99%",
	},
})
gsap.from("header .menu1 > *", {
	opacity: 0,
	y: "-100%",
	stagger: 0.3,
	delay: 0.3,
	scrollTrigger: {
		trigger: ".home",
		start: "top 99%",
	},
})

gsap.from("header form", {
	opacity: 0,
	y: "-100%",
	stagger: 0.3,
	delay: 0.6,
	scrollTrigger: {
		trigger: ".home",
		start: "top 99%",
	},
})

gsap.from(".home .home-text h5", {
	opacity: 0,
	x: "-100%",
	delay: 0.8,
	scrollTrigger: {
		trigger: ".home",
		start: "top 99%",
	},
})

gsap.from(".home .home-text h1", {
	opacity: 0,
	x: "-100%",
	delay: 1.2,
	scrollTrigger: {
		trigger: ".home",
		start: "top 99%",
	},
})

gsap.from(".home .home-text p", {
	opacity: 0,
	x: "-100%",
	delay: 1.4,
	scrollTrigger: {
		trigger: ".home",
		start: "top 99%",
	},
})
gsap.from(".home .home-text .btn1", {
	opacity: 0,
	x: "-100%",
	delay: 1.4,
	scrollTrigger: {
		trigger: ".home",
		start: "top 99%",
	},
})
gsap.from(".home .icons > *", {
	opacity: 0,
	y: "100%",
	delay: 1.6,
	stagger: 0.3,
	scrollTrigger: {
		trigger: ".home",
		start: "top 99%",
	},
})

gsap.from(".feature-content > *", {
	opacity: 0,
	y: "20%",
	clearProps: "all",
	stagger: 0.2,
	scrollTrigger: {
		trigger: ".feature-content",
		start: "top 99%",
		end: "bottom 90%",
		scrub: true,
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
	duration: 1.2,
	rotate: 25,
	stagger: 1.2,
	scrollTrigger: {
		trigger: ".popular",
		start: "top 80%",
		end: "top 60%",
		scrub: 2.5,
	},
})

gsap.from(".center-btn", {
	opacity: 0,
	y: "100%",
	duration: 1,
	rotate: 25,
	scrollTrigger: {
		trigger: ".center-btn",
		start: "top 100%",
		end: "bottom 100%",
		scrub: true,
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
	scale: 0,
	rotate: 5,
	scrollTrigger: {
		trigger: ".info-container .box1",
		start: "top 100%",
		end: "bottom 100%",
		scrub: true,
	},
})
gsap.from(".info-container .box2", {
	opacity: 0,
	scale: 0,
	rotate: 5,
	scrollTrigger: {
		trigger: ".info-container .box2",
		start: "top 100%",
		end: "bottom 99%",
		scrub: true,
	},
})
gsap.from(".info-container .box3", {
	opacity: 0,
	scale: 0,
	rotate: 5,
	scrollTrigger: {
		trigger: ".info-container .box3",
		start: "top 100%",
		end: "bottom 100%",
		scrub: true,
	},
})
gsap.from(".info-container .box4", {
	opacity: 0,
	scale: 0,
	rotate: 5,
	scrollTrigger: {
		trigger: ".info-container .box4",
		start: "top 100%",
		end: "bottom 100%",
		scrub: true,
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

gsap.from(".footer .bottom-content span", {
	opacity: 0,
	x: "-100%",
	duration: 1.2,
	stagger: 0.3,
	scrollTrigger: {
		trigger: ".footer",
		start: "top 90%",
	},
})
gsap.from(".footer .bottom-content .socials > *", {
	opacity: 0,
	x: "100%",
	duration: 1.2,
	stagger: 0.2,
	delay: 0.3,
	scrollTrigger: {
		trigger: ".footer",
		start: "top 60%",
	},
})


gsap.from(".bx", {
	opacity: 0,
	y: "-300px",
	scale: 0,
	duration:0.5,
})