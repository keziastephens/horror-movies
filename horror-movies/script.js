console.log('im linked');

let objectArray = [
    {
        id: 1,
        photo: 'the-conjuring.jpg',
        title: 'The Conjuring',
        director: 'James Wan',
        date: '2013',
        info: 'The Perron family moves into a farmhouse where they experience paranormal phenomena. They consult demonologists, Ed and Lorraine Warren, to help them get rid of the evil entity haunting them.'
    },
    {
        id: 2,
        photo: 'it.jpg',
        title: 'IT',
        director: 'Andrés Muschietti',
        date: '2017',
        info: 'Seven helpless and bullied children are forced to face their worst nightmares when Pennywise, a shape-shifting clown, reappears. The clown, an ancient evil torments children before feeding on them.'
    },
    {
        id: 3,
        photo: 'nightmare.jpg',
        title: 'A Nightmare on Elm Street',
        director: 'Wes Craven',
        date: '1984',
        info: 'A young girl realises that she has to stay awake at any cost to avoid the clawed killer who is butchering her friends one by one in their dreams.'
    },
    {
        id: 4,
        photo: 'the-eye.jpg',
        title: 'The Eye',
        director: 'Oxide Pang Chun, Danny Pang Phat',
        date: '2002',
        info: 'After 18 years of blindness, 20-year-old violinist Wong regains her vision when she undergoes a corneal transplant. Shes overjoyed with the procedure, but her elation dissipates when she begins experiencing ghostly encounters. When she travels to her cornea donors hometown to investigate, her symptoms worsen.'
    },
    {
        id: 5,
        photo: 'friday.jpg',
        title: 'Friday the 13th',
        director: 'Sean Cunningham',
        date: '1980',
        info: 'A group of counsellors are brutally killed one by one at a summer camp held at the Camp Crystal Lake, when the entrepreneur Steve Christie reopens the site, which was shut for years.'
    },
    {
        id: 6,
        photo: 'ju-on.jpg',
        title: 'Ju-On: The Grudge',
        director: 'Takashi Shimizu',
        date: '2002',
        info: 'A very evil curse and vengeful spirits seem to linger upon a house where the horrific murder of a woman and child took place and anyone who sets foot inside the house is marked for a terrifying haunting which will not rest. One by one, those who have been tainted by the house begin to die, and nowhere is safe.'
    },
    {
        id: 7,
        photo: 'hereditary.jpg',
        title: 'Hereditary',
        director: 'Ari Aster',
        date: '2018',
        info: 'When the matriarch of the Graham family passes away, her daughter and grandchildren begin to unravel cryptic and increasingly terrifying secrets about their ancestry, trying to outrun the sinister fate they have inherited.'
    },
    {
        id: 8,
        photo: 'ringu.jpg',
        title: 'Ringu',
        director: 'Hideo Nakata',
        date: '1998',
        info: 'A woman and her ex-husband investigate a series of teen deaths caused by a mysterious videotape. Their investigation takes an ugly turn when their own son becomes a victim.'
    }
];



function objectArrayCardInfo(){
    for(let i = 0; i < objectArray.length; i++){
        $('#cardContent').append(
            `
            <div class="card">
                <img class="card-img-top" src="${objectArray[i].photo}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${objectArray[i].title}</h5>
                    <p class="card-text">${objectArray[i].director}</p>
                    <p class="card-text">${objectArray[i].date}</p>
                    <button id="${objectArray[i].id}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">
                        Buy Now
                    </button>
                </div>
            </div> 
            `
        )
    }
}