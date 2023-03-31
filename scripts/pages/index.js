async function getPhotographers() {
    // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
    // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
    const photographersDB = "https://raw.githubusercontent.com/OpenClassrooms-Student-Center/Front-End-Fisheye/main/data/photographers.json";
    let photographers = [];

    if (window.fetch) {
        fetch(photographersDB)
        .then((response) => response.json())
        .then((data) => console.log(data));
    } else {
        console.log("requete foirée");
    }    
    
    photographers = data;
    // et bien retourner le tableau photographers seulement une fois récupéré
    return ({
        photographers: [...photographers, ...photographers, ...photographers]})
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();