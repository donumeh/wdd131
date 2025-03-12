const mainnav = document.querySelector('nav')
const hambutton = document.querySelector('#menu');
const date = new Date();


document.getElementById("currentyear").
	textContent = date.getFullYear();

document.getElementById("lastModified").
	textContent = document.lastModified;


hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});
