const mainnav = document.querySelector('nav')
const hambutton = document.querySelector('#menu');
const date = new Date();
const figures = document.querySelector('.figures');


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Maputo Mozambique Temple",
    location: "Maputo Mozambique",
    dedicated: "2024, October, 6",
    area: 0,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/maputo-mozambique-temple/maputo-mozambique-temple-53836-thumb.jpg"
  },
  {
    templeName: "Bogotá Colombia Temple",
    location: "Bogotá, Distrito Capital Colombia",
    dedicated: "1999, April, 26",
    area: 53500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/bogota-colombia-temple/bogota-colombia-temple-7733-main.jpg"
  },
  {
    templeName: "Campinas Brazil Temple",
    location: "Campinas–SP Brazil",
    dedicated: "2002, May 17",
    area: 48100,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/campinas-brazil-temple/campinas-brazil-temple-6012-main.jpg"
  },
];

const populateFigures = (temple) => {
  const figure = document.createElement("figure");
  const img = document.createElement('img');
  const figcaption = document.createElement('figcaption');
  const location = document.createElement('p');
  const dedicated = document.createElement('p');
  const size = document.createElement('p');
  const templeName = document.createElement('h2');


  templeName.textContent = temple.templeName;
  location.textContent = `Location: ${temple.location}`;
  dedicated.textContent = `Dedication: ${temple.dedicated}`;
  size.textContent = `Size: ${temple.area} sq ft`;
  img.setAttribute("alt", temple.templeName);
  img.setAttribute("src", temple.imageUrl);
  img.setAttribute("loading", "lazy");
  figcaption.textContent = temple.templeName;

  figure.appendChild(templeName);
  figure.appendChild(location);
  figure.appendChild(dedicated);
  figure.appendChild(size);
  figure.appendChild(img);

  figures.appendChild(figure);
}

temples.forEach(populateFigures);

document.getElementById("currentyear").
  textContent = date.getFullYear();

document.getElementById("lastModified").
  textContent = document.lastModified;


hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
});

const homeTemples = document.querySelector('#home');
const oldTemples = document.querySelector('#old');
const newTemples = document.querySelector('#new');
const largeTemples = document.querySelector('#large');
const smallTemples = document.querySelector('#small');

homeTemples.addEventListener('click', () => {
  figures.innerHTML = "";
  temples.forEach(populateFigures);
});

oldTemples.addEventListener('click', () => {
  const oldTemplesArray = temples.filter(
    temple => temple.dedicated.substring(0, 4) < "1900"
  );

  figures.innerHTML = "";

  oldTemplesArray.forEach(populateFigures);
});

newTemples.addEventListener('click', () => {
  const newTemplesArray = temples.filter(
    temple => temple.dedicated.substring(0, 4) > "2000"
  );

  figures.innerHTML = "";

  newTemplesArray.forEach(populateFigures);
});

largeTemples.addEventListener('click', () => {
  const largeTemplesArray = temples.filter(
    temple => temple.area > 90000
  );

  figures.innerHTML = "";
  largeTemplesArray.forEach(populateFigures);
});

smallTemples.addEventListener('click', () => {
  const smallTemplesArray = temples.filter(
    temple => temple.area < 10000
  );

  figures.innerHTML = "";
  smallTemplesArray.forEach(populateFigures);
});


