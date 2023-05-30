async function getPhotographers() {
    const response = await fetch('https://raw.githubusercontent.com/OpenClassrooms-Student-Center/Front-End-Fisheye/main/data/photographers.json');
    if (!response.ok) {
        console.log("Error");
    }
    const data = await response.json();
    console.log(data);
    return data;
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");
    console.log(photographers);
    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    console.log(photographers);
    displayData(photographers);
};

init();