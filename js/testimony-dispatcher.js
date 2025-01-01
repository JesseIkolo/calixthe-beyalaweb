let mook = [
    {
        "title": "L'œuvre littéraire de Calixthe Beyala : une écriture de rupture et d'engagement",
        "favicon": "https://www.fabula.org/favicon.ico",
        "site_name": "Fabula",
        "description": "Cet article explore l'impact de la plume de Calixthe Beyala, soulignant son engagement dans la défense des droits des femmes et sa capacité à aborder des thèmes sociaux complexes.",
        "cover_photo": "https://www.fabula.org/images/beyala.jpg",
        "publication_date": "2022-03-15"
    },
    {
        "title": "Les Représentations féminines dans l'œuvre de Calixthe Beyala",
        "favicon": "https://www.larevuedesressources.org/favicon.ico",
        "site_name": "La Revue des Ressources",
        "description": "Une analyse des relations entre hommes et femmes dans les récits de Calixthe Beyala, mettant en lumière les défis auxquels font face les femmes dans ses œuvres.",
        "cover_photo": "https://www.larevuedesressources.org/images/beyala.jpg",
        "publication_date": "2021-11-10"
    },
    {
        "title": "Calixthe Beyala entre l'oral et l'écrit-cercueil : essai d'analyse du...",
        "favicon": "https://books.openedition.org/favicon.ico",
        "site_name": "OpenEdition Books",
        "description": "Cette étude examine comment les œuvres de Calixthe Beyala fonctionnent comme des contes, abordant les traumatismes vécus par la femme africaine et leur impact littéraire.",
        "cover_photo": "https://books.openedition.org/images/beyala.jpg",
        "publication_date": "2020-05-22"
    },
    {
        "title": "Calixthe Beyala - Wikipédia",
        "favicon": "https://fr.wikipedia.org/favicon.ico",
        "site_name": "Wikipédia",
        "description": "Une page détaillée sur Calixthe Beyala, incluant des avis critiques sur son parcours et son œuvre, ainsi que son engagement en faveur des minorités.",
        "cover_photo": "https://fr.wikipedia.org/images/beyala.jpg",
        "publication_date": "2019-08-30"
    },
    {
        "title": "Sexe et transgression : l'écriture obscène de Calixthe Beyala",
        "favicon": "https://www.erudit.org/favicon.ico",
        "site_name": "Érudit",
        "description": "Cet article aborde la provocation dans l'écriture de Calixthe Beyala, analysant comment ses thèmes sexuels et transgressifs influencent la perception de son œuvre.",
        "cover_photo": "https://www.erudit.org/images/beyala.jpg",
        "publication_date": "2018-12-12"
    },
    {
        "title": "Calixthe Beyala : griotte postmoderne ou plagiaire - OpenEdition Books",
        "favicon": "https://books.openedition.org/favicon.ico",
        "site_name": "OpenEdition Books",
        "description": "Une analyse critique qui questionne les influences littéraires dans l'œuvre de Calixthe Beyala, explorant son impact sur la littérature africaine.",
        "cover_photo": "https://books.openedition.org/images/beyala.jpg",
        "publication_date": "2017-04-05"
    }
]



let testimony_side = document.querySelector(".block-lateral");

mook.forEach(element => {
    
    testimony_side.innerHTML+=`<div class="column services-list__item blured">
                    <div class="services-list__item-content">
                        <h5 class="item-title"><a href="`+ element.url+`">`+element.title+`</a></h5>
                        <div class="detail">
                            <div class="source-identification">
                                <div class="logo" style="background-image : url(`+ element.favicon+`); background-size:cover; "></div>
                                <div class="name">`+ element.site_name +`</div>
                            </div>
                        </div>
                        <p>`+ element.description +`</p>
                            <div class="date">`+element.publication_date+`</div>

                    </div>
                </div>`

});