let params = (new URL(document.location)).searchParams;
let id = params.get('id');
console.log(id);
let currentPhotographer;
let totalLikes = 0;

async function getPhotographers(filter) {
    fetch('https://raw.githubusercontent.com/OpenClassrooms-Student-Center/Front-End-Fisheye/main/data/photographers.json')
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            console.log(`Erreur : ${response.status}`);
        }
    })
    .then((data) => extractData(data, filter))
}

function extractData(data, sortProperty) {  
  let a = data.media.filter((media)=>(media.photographerId===Number(id)))
  console.log(sortProperty)

  let sortedMedia = a.sort((a, b) => {
    // use comparison tu get the filtered array
    if (sortProperty === "likes" || sortProperty === "date") {
      return b[sortProperty] - a[sortProperty];
    } else if (sortProperty === "title") { //use localcompare to compare string values
      return a[sortProperty].localeCompare(b[sortProperty]);
    }
  });
  
  //clean HTML
  const anchorMedia = document.querySelector(".photograph-content")
  removeAllChildNodes(anchorMedia)
  const anchorPhotographer = document.querySelector(".photograph-header")
  removeAllChildNodes(anchorPhotographer)
  const anchorSort = document.querySelector(".photograph-sortMenu")
  removeAllChildNodes(anchorSort)

  //photographer pictures
  sortedMedia.forEach((media) => {
    //fetch only media where link id is found and inject in dedicated factory     
      const photographersSection = document.querySelector(".photograph-content");
      const photographerModel = photographerMediaFactory(media);
      const userCardDOM = photographerModel.getUserCardDOM();      
      photographersSection.appendChild(userCardDOM);

      //lightbox
      const lightboxSection = document.querySelector(".lightboxContainer");
      const lightboxBuilder = lightboxFactory(media);
      const lightboxDOM = lightboxBuilder.getUserCardDOM();            
      lightboxSection.appendChild(lightboxDOM); 
  });
  
  //photographer header
  data.photographers.forEach((photographer) => {
    //fetch only photographer where link id is found and inject in dedicated factory
    if (photographer.id === Number(id)) {
      const photographersSection = document.querySelector(".photograph-header");
      const photographerModel = photographerSingleFactory(photographer);
      const userCardDOM = photographerModel.getUserCardDOM();
      photographersSection.appendChild(userCardDOM);       
    }
  });

  //sorting div
  const sortSection = document.querySelector(".photograph-sortMenu");
  const sortDiv = sortFactory();
  sortSection.appendChild(sortDiv);  

}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

getPhotographers();