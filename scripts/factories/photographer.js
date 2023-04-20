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
        h5.textContent = price+"€/jour";     
        const modal = document.createElement( 'button' );
        modal.setAttribute("class", "contact_button" )
        modal.setAttribute("onclick", "displayModal()");
        modal.textContent = "Contactez-moi";
        const modalName = document.querySelector(".modal header h2");
        modalName.innerHTML = "Contactez-moi<br/>"+name;
        const stats = document.createElement('div');
        stats.setAttribute("class", "bottomStats");
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
        //article.appendChild(h5);
        return (article);
    }
    return { name, portrait, tagline, price, city, country, getUserCardDOM }
}

function photographerMediaFactory(data) {
    const { date,likes,price,title,video,image } = data;

    const picture = `D:\\Projets_Code\\OC\\Projet_FishEye\\Front-End-Fisheye-main\\assets\\photographers\\Sample Photos\\PhotographersPhotos\\`+image;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h3 = document.createElement( 'h3' );
        h3.textContent = title;
        const h4 = document.createElement( 'h4' );
        h4.textContent = likes+" ";
        const desc = document.createElement( 'div' );
        desc.setAttribute("class", "picDesc")
        const heart = document.createElement( 'i' );
        heart.setAttribute("class","fa-solid fa-heart");
        heart.setAttribute("style", "color: #901c1c");
        h4.appendChild(heart);
        article.appendChild(img);
        desc.appendChild(h3);
        desc.appendChild(h4);
        article.appendChild(desc);
        return (article);
    }
    return { date,likes,price,title,video,image, getUserCardDOM }
}