let params = (new URL(document.location)).searchParams;
let id = params.get('id');
console.log(id);

let currentPhotographer;

async function getPhotographers() {
    fetch('https://raw.githubusercontent.com/OpenClassrooms-Student-Center/Front-End-Fisheye/main/data/photographers.json')
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            console.log(`Erreur : ${response.status}`);
        }
    })
    .then((data) => extractData(data))
}

function extractData(data) {
  console.log(data);
  data.photographers.forEach((photographer) => {
    //fetch only photographer where link id is found and inject in dedicated factory
    if (photographer.id === Number(id)) {
      const photographersSection = document.querySelector(".photograph-header");
      const photographerModel = photographerSingleFactory(photographer);
      const userCardDOM = photographerModel.getUserCardDOM();
      photographersSection.appendChild(userCardDOM);       
    }
  });

  data.media.forEach((media) => {
    //fetch only media where link id is found and inject in dedicated factory
    if (media.photographerId === Number(id)) {    
      const photographersSection = document.querySelector(".photograph-content");
      const photographerModel = photographerMediaFactory(media);
      const userCardDOM = photographerModel.getUserCardDOM();
      photographersSection.appendChild(userCardDOM);          
    }
  });
}

getPhotographers();




