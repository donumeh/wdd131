
const date = new Date();


document.getElementById("currentyear").
	textContent = date.getFullYear();

document.getElementById("lastModified").
	textContent = document.lastModified;

if (window.innerWidth < 600) {
	document.getElementById("image_message")
		.textContent = "Use a bigger browser to view image"
}