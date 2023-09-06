let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x')
	navbar.classList.toggle('active')
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
	sections.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');

		if(top >= offset && top < offset + height) {
			navLinks.forEach(links => {
				links.classList.remove('active');
				document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
			});
		};
	});
	let header = document.querySelector('header')

	header.classList.toggle('sticky', window.scrollY > 100);

	menuIcon.classList.remove('bx-x')
	navbar.classList.remove('active')
};

ScrollReveal({ 
	//reset: true,
	distance: '80px',
	duration: 2000,
	delay: 200
});

ScrollReveal().reveal('.home-content, .cabecalho', { origin: 'top' });
ScrollReveal().reveal('.home-img, .servicos-container, .portifolio-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .sobre-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .sobre-content', { origin: 'right' });

function saibamais(){
	var pontos=document.getElementById("pontos")
	var maisTexto=document.getElementById("mais")
	var btnsaibamais=document.getElementById("btnsaibamais")

	if(pontos.style.display === "none"){
		pontos.style.display="inline";
		maisTexto.style.display="none"
		btnsaibamais.innerHTML="Saiba Mais"
	}else{
		pontos.style.display="none";
		maisTexto.style.display="inline"
		btnsaibamais.innerHTML="Saiba Menos"
	}
}