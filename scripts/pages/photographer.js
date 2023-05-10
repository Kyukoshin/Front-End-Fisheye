let params = (new URL(document.location)).searchParams;
let id = params.get('id');
console.log(id);
let currentPhotographer;
let totalLikes = 0;

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
  let a = data.media.filter((media)=>(media.photographerId===Number(id)))
  console.log(a)
  a.forEach((media) => {
    //fetch only media where link id is found and inject in dedicated factory     
      const photographersSection = document.querySelector(".photograph-content");
      const photographerModel = photographerMediaFactory(media);
      const userCardDOM = photographerModel.getUserCardDOM();
      photographersSection.appendChild(userCardDOM);      
      
      const lightboxSection = document.querySelector(".lightboxContainer");
      const lightboxBuilder = lightboxFactory(media);
      const lightboxDOM = lightboxBuilder.getUserCardDOM();
      lightboxSection.appendChild(lightboxDOM); 
  });
}

getPhotographers();


//onlick sur le foreach
//afficher galerie sur le onclick de l'image
//let a = data.media.filter((media)=>(media.photographerId===Number(id)))
//tableau.indexof()