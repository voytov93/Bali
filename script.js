	let btn = document.querySelector('.nav__burder'),
		header = document.querySelector('.header'),
		bline = document.querySelector('.burger_line'),
		nav = document.querySelector('.nav');
	btn.onclick = () => {
		btn.classList.toggle("active")
		header.classList.toggle("active")
		bline.classList.toggle("active")
		nav.classList.toggle("active")
	}