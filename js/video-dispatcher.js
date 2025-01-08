// let mook_video = [
//     {
//         "title": "Calixthe Beyala, romancière - Les grands entretiens d'Yves",
//         "description": "Entretien avec Calixthe Beyala, où elle parle de son parcours et de son œuvre.",
//         "channel_name": "Les grands entretiens",
//         "channel_profile_picture": "https://yt3.ggpht.com/ytc/AGIKgqP8zD2YJt9M2yRr1z3xT9JkQ2L5z7Z5h8x1g=s176-c-k-c0x00ffffff-no-rj",
//         "publication_date": "2021-05-20",
//         "country": "France",
//         "domain": "Culture"
//     },
//     {
//         "title": "DIMANCHE AVEC VOUS : INSIDE CALIXTHE BEYALA",
//         "description": "Un aperçu de la vie et de l'œuvre de Calixthe Beyala.",
//         "channel_name": "ÉQUINOXE TV",
//         "channel_profile_picture": "https://yt3.ggpht.com/ytc/AGIKgqM9FZQ0sG4yU6wN7T8M6m5M7G4yU6wN7T8M6m5=s176-c-k-c0x00ffffff-no-rj",
//         "publication_date": "2021-06-15",
//         "country": "Cameroun",
//         "domain": "Société"
//     },
//     {
//         "title": "CALIXTHE BEYALA CONTRE LA SUCCESSION PÈRE FILS",
//         "description": "Calixthe Beyala discute des enjeux de la succession père-fils en Afrique.",
//         "channel_name": "ÉQUINOXE TV",
//         "channel_profile_picture": "https://yt3.ggpht.com/ytc/AGIKgqM9FZQ0sG4yU6wN7T8M6m5M7G4yU6wN7T8M6m5=s176-c-k-c0x00ffffff-no-rj",
//         "publication_date": "2021-07-10",
//         "country": "Cameroun",
//         "domain": "Société"
//     },
//     {
//         "title": "DIMANCHE AVEC VOUS PORTRAIT CALIXTHE BEYALA",
//         "description": "Portrait de Calixthe Beyala, explorant sa carrière et ses œuvres.",
//         "channel_name": "ÉQUINOXE TV",
//         "channel_profile_picture": "https://yt3.ggpht.com/ytc/AGIKgqM9FZQ0sG4yU6wN7T8M6m5M7G4yU6wN7T8M6m5=s176-c-k-c0x00ffffff-no-rj",
//         "publication_date": "2021-08-01",
//         "country": "Cameroun",
//         "domain": "Culture"
//     },
//     {
//         "title": "L'ARÈNE 19/02/2017, invité: CALIXTHE BEYALA et les Régimes Africains",
//         "description": "Calixthe Beyala discute des régimes africains et de leur impact.",
//         "channel_name": "L'ARÈNE",
//         "channel_profile_picture": null,
//         "publication_date": "2017-02-19",
//         "country": null,
//         "domain": null
//     }
// ]

// {
//     "title": "Calixthe Beyala se raconte",
//     "description": "Calixthe Beyala partage son parcours et ses inspirations.",
//     "channel_name": null,
//     "channel_profile_picture": null,
//     "publication_date": null,
//     "country": null,
//     "domain": null
// }

let mook_video = [
    {
        "title": "Calixthe Beyala, romancière - Les grands entretiens d'Yves Thréard",
        "description": "Calixthe Beyala explique qu'il n'y a pas de sentiment anti-français mais anti-françafricain. Elle aborde des sujets tels que la Françafrique et l'avenir de l'Afrique.",
        "channel_name": "LCP",
        "profile_picture": "https://yt3.ggpht.com/ytc/AGIKgqN1v7K9tP0f4V9gF5xHkL1Xo9u6Bz1u6c5H6D0=s176-c-k-c0x00ffffff-no-rj",
        "cover_photo": "https://img.youtube.com/vi/LoaHm-z4650/hqdefault.jpg",
        "publication_date": "2022-03-15",
        "video_link": "https://www.youtube.com/watch?v=LoaHm-z4650",
        "country": "France",
        "channel_domain": "Société"
    },
    {
        "title": "Interview de la romancière Calixthe Beyala",
        "description": "Calixthe Beyala répond à des questions sur son engagement et sa carrière.",
        "channel_name": "Littérature Africaine",
        "profile_picture": "",
        "cover_photo": "https://img.youtube.com/vi/Dpc6B7VRGXY/hqdefault.jpg",
        "publication_date": "2020-05-22",
        "video_link": "https://www.youtube.com/watch?v=Dpc6B7VRGXY",
        "country": "",
        "channel_domain": ""
    },
    {
        "title": "DIMANCHE AVEC VOUS : INSIDE CALIXTHE BEYALA - ÉQUINOXE TV",
        "description": "Une exploration de la vie et de l'œuvre de Calixthe Beyala.",
        "channel_name": "ÉQUINOXE TV",
        "profile_picture": "https://yt3.ggpht.com/ytc/AGIKgqP8ZcKzD1Wn9kFjz7H3g2xG2uY7_3m7U5iFZg=s176-c-k-c0x00ffffff-no-rj",
        "cover_photo": "https://img.youtube.com/vi/9-XMl6vV-F4/hqdefault.jpg",
        "publication_date": "2021-11-10",
        "video_link": "https://www.youtube.com/watch?v=9-XMl6vV-F4",
        "country": "Cameroun",
        "channel_domain": "Société"
    },
    
    {
        "title": "Littérature africaine - Calixthe Beyala",
        "description": "Calixthe Beyala discute de la littérature francophone et de son impact.",
        "channel_name": "",
        "profile_picture": "",
        "cover_photo": "https://img.youtube.com/vi/5-K3W-PBf1k/hqdefault.jpg",
        "publication_date": "2008-07-15",
        "video_link": "https://www.youtube.com/watch?v=5-K3W-PBf1k",
        "country": "",
        "channel_domain": ""
    }
]


let video_side = document.querySelector(".video-block-lateral");

mook_video.forEach(element => {
    console.log(element)
    
    video_side.innerHTML+=`<div class="column services-list__item video-list-lateral"><div class="ads-block video-content">
                        <div class="cover">
                            <div class="bkg" style="background-image:url(`+ element.cover_photo+`); background-size:cover;"></div>
                            <a class="play-button" href="`+element.video_link+`">
                                <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.5185 15.1467L10.5215 4.14813C10.3699 4.05549 10.1963 4.00491 10.0187 4.00158C9.8411 3.99825 9.6658 4.04231 9.51085 4.1292C9.3559 4.2161 9.2269 4.34271 9.13711 4.49601C9.04733 4.6493 9 4.82375 9 5.0014V26.9986C9 27.1762 9.04733 27.3507 9.13711 27.504C9.2269 27.6573 9.3559 27.7839 9.51085 27.8708C9.6658 27.9577 9.8411 28.0017 10.0187 27.9984C10.1963 27.9951 10.3699 27.9445 10.5215 27.8518L28.5185 16.8533C28.6647 16.7639 28.7855 16.6385 28.8693 16.4891C28.9531 16.3397 28.9971 16.1713 28.9971 16C28.9971 15.8287 28.9531 15.6602 28.8693 15.5108C28.7855 15.3614 28.6647 15.236 28.5185 15.1467Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    
                            </a>
                        </div>
                        <div class="description">`+element.title+`</div>
                        <div class="details">
                            <div class="host">Par <span class="author"><a href="`+element.video_link+`">`+ element.channel_name+`</a></span></div>
                            <div class="date">Publié <span class="date">`+element.publication_date+`</span></div>
                        </div>
                    </div>
                </div>`

});