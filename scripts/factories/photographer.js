function photographerFactory(data) {
    const { name, portrait, tagline, price, city, country, id } = data;

    const picture = `D:\\Projets_Code\\OC\\Projet_FishEye\\Front-End-Fisheye-main\\assets\\photographers\\Sample Photos\\Photographers ID Photos\\`+portrait;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const link = document.createElement( 'a' );
        link.setAttribute("href", "photographer.html?id="+ id);
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement( 'h3' );
        h3.textContent = city+", "+country;
        const h4 = document.createElement( 'h4' );
        h4.textContent = tagline;
        const h5 = document.createElement( 'h5' );
        h5.textContent = price+"€/jour";        
        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(h5); 

        return (article);
    }
    return { name, portrait, tagline, price, city, country, getUserCardDOM }
}

function photographerSingleFactory(data) {
    const { name, portrait, tagline, price, city, country, id } = data;

    const picture = `D:\\Projets_Code\\OC\\Projet_FishEye\\Front-End-Fisheye-main\\assets\\photographers\\Sample Photos\\Photographers ID Photos\\`+portrait;

    function getUserCardDOM() {     
        const article = document.createElement( 'article' );
        const info = document.createElement( 'div' );
        const modale = document.createElement( 'div' );
        const portrait = document.createElement( 'div' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h1 = document.createElement( 'h1' );
        h1.textContent = name;
        const h3 = document.createElement( 'h3' );
        h3.textContent = city+", "+country;
        const h4 = document.createElement( 'h4' );
        h4.textContent = tagline;
        const h5 = document.createElement( 'h5' );
        h5.textContent = price+"€ / jour";     
        const totLikes = document.createElement( 'h5' );
        totLikes.textContent = totalLikes;  
        totLikes.setAttribute("id","totLikes") ;
        const totHeart = document.createElement( 'i' );
        totHeart.setAttribute("class","fa-solid fa-heart");
        const modal = document.createElement( 'button' );
        modal.setAttribute("class", "contact_button" )
        modal.setAttribute("onclick", "displayModal()");
        modal.textContent = "Contactez-moi";
        const modalName = document.querySelector(".contact_modal header h2");
        modalName.innerHTML = "Contactez-moi<br/>"+name;
        const stats = document.createElement('div');
        stats.setAttribute("class", "bottomStats");
        stats.appendChild(totLikes);
        stats.appendChild(totHeart);
        stats.appendChild(h5)
        info.appendChild(h1);
        info.appendChild(h3);
        info.appendChild(h4);
        info.appendChild(stats);
        modale.appendChild(modal);
        portrait.appendChild(img);
        article.appendChild(info);
        article.appendChild(modale);
        article.appendChild(portrait);

        return (article);
    }
    return { name, portrait, tagline, price, city, country, getUserCardDOM }
}

let numSlide = 1

function photographerMediaFactory(data) {
    const {date,likes,price,title,video,image,id} = data;

    const picture = `D:\\Projets_Code\\OC\\Projet_FishEye\\Front-End-Fisheye-main\\assets\\photographers\\Sample Photos\\PhotographersPhotos\\`+image;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const h3 = document.createElement( 'h3' );
        h3.textContent = title;
        const h4 = document.createElement( 'h4' );
        h4.textContent = likes+" ";
        const desc = document.createElement( 'div' );
        desc.setAttribute("class", "picDesc")
        const heart = document.createElement( 'i' );
        heart.setAttribute("class","fa-regular fa-heart");
        heart.setAttribute("style", "color: #901c1c");
        h4.appendChild(heart);

        //Compteur likes
        heart.addEventListener("click", () => {
            if(heart.classList.contains("liked")){
            let newLikes = this.likes
            totalLikes--
            totLikes=document.getElementById("totLikes")
            totLikes.textContent = totalLikes; 
            h4.textContent = newLikes+" "
            h4.appendChild(heart)
            heart.classList.remove("liked")
            heart.classList.remove("fa-solid")
            heart.classList.add("fa-regular")
           
            }
            else{
            let newLikes = this.likes
            newLikes++
            totalLikes++
            totLikes=document.getElementById("totLikes")
            totLikes.textContent = totalLikes; 
            h4.textContent = newLikes+" "
            h4.appendChild(heart)
            heart.classList.add("liked")
            heart.classList.add("fa-solid")
            heart.classList.remove("fa-regular")
            
            }
        });
        
        const articleImage = document.createElement('a');
        articleImage.appendChild(new factoryImage(data)); 
        article.appendChild(articleImage);       
        desc.appendChild(h3);
        desc.appendChild(h4);
        article.appendChild(desc);  
        articleImage.setAttribute("onclick",`displayLightBox();currentSlide(${numSlide})`); 
        numSlide ++     
        return (article);
    }
    return { date,likes,price,title,video,image,id, getUserCardDOM }
}

function sortFactory(){
    
    const anchorFilter = document.createElement('div');
    const sortText = document.createElement('p');
    sortText.innerHTML = "Trier par";
    const sortMenu = document.createElement('ul');        
    const sortPop = document.createElement('li');
    sortPop.innerHTML= "Popularité";
    sortPop.setAttribute("onclick", `sortBy("popularity")`);
    const sortDate = document.createElement('li');
    sortDate.innerHTML= "Date";
    sortDate.setAttribute("onclick", `sortBy("date")`);
    const sortTitle = document.createElement('li');
    sortTitle.innerHTML= "Titre";
    sortTitle.setAttribute("onclick", `sortBy("title")`);
    sortMenu.appendChild(sortPop);
    sortMenu.appendChild(sortDate);
    sortMenu.appendChild(sortTitle);
    anchorFilter.appendChild(sortText);
    anchorFilter.appendChild(sortMenu);

    return anchorFilter

}

function lightboxFactory(media) {
    const { date,likes,price,title,video,image,id } = media;
    
    function getUserCardDOM() {
        const img = document.createElement( 'li' );
        img.setAttribute("class","lightboxImage");
        img.appendChild(new factoryImage(media)); 
        const caption = document.createElement('p');
        caption.setAttribute("class","lightboxPicDesc");
        caption.innerHTML = title;
        img.appendChild(caption); 
        totalLikes += likes
        console.log(totalLikes)
        return (img);
    }
    return { date,likes,price,title,video,image,id, getUserCardDOM }
}

class factoryImage {
	constructor(element) {
        if(element.video)
            return this.createVideo(element.video)
        else 
            return this.createImage(element.image)
    }

    createVideo(video) {
        let vid = document.createElement("video")
        let sour = document.createElement("source")
        sour.src= `D:\\Projets_Code\\OC\\Projet_FishEye\\Front-End-Fisheye-main\\assets\\photographers\\Sample Photos\\PhotographersPhotos\\`+video
        vid.appendChild(sour)        
        return vid
    }

    createImage(image) {
        let img = document.createElement("img")
        img.src= `D:\\Projets_Code\\OC\\Projet_FishEye\\Front-End-Fisheye-main\\assets\\photographers\\Sample Photos\\PhotographersPhotos\\`+image
        return img
    }
}

function sortBy(n) {
    if (n === "popularity") {
        getPhotographers("likes")
    }
    else if (n === "date") {
        getPhotographers("date")
    }
    else if (n === "title") {
        getPhotographers("title")    
    }        
}