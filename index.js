const foxData = [
    {
        name: "Red smile fox",
        likes: 2547,
        imageSrc: "assets/red_smile_fox.png",
        heart: "assets/like_icon.png",
        altText: "Red smile fox",
        type: 'red',
        description: "Lorem ipsum dolor sit amet, eu mei posse possim atomorum, vix cu fabellas assueverit. Vel ad option partiendo maiestatis, nec affert appetere te.",
    },
    {
        name: "Pet smile fox",
        likes: 1000,
        imageSrc: "assets/pet_smile_fox.png",
        heart: "assets/like_icon.png",
        altText: "Pet smile fox",
        type: 'pet',
        description: "Lorem ipsum dolor sit amet, eu mei posse possim atomorum, vix cu fabellas assueverit. Vel ad option partiendo maiestatis, nec affert appetere te.",
    },
    {
        name: "Arctic smile fox",
        likes: 4659,
        imageSrc: "assets/arctic_smile_fox.png",
        heart: "assets/like_icon.png",
        altText: "Arctic smile fox",
        type: 'arctic',
        description: "Lorem ipsum dolor sit amet, eu mei posse possim atomorum, vix cu fabellas assueverit. Vel ad option partiendo maiestatis, nec affert appetere te.",
    },
    {
        name: "Kit smile fox",
        likes: '0037',
        imageSrc: "assets/kit_smile_fox.png",
        heart: "assets/like_icon.png",
        altText: "Kit smile fox",
        type: 'kit',
        description: "Lorem ipsum dolor sit amet, eu mei posse possim atomorum, vix cu fabellas assueverit. Vel ad option partiendo maiestatis, nec affert appetere te.",
    },
    {
        name: "Pet smile fox",
        likes: 9764,
        imageSrc: "assets/white_pet_smile_fox.png",
        heart: "assets/like_icon.png",
        altText: "White pet smile fox",
        type: 'pet',
        description: "Lorem ipsum dolor sit amet, eu mei posse possim atomorum, vix cu fabellas assueverit. Vel ad option partiendo maiestatis, nec affert appetere te.",
    },
    {
        name: "Kit smile fox",
        likes: 1287,
        imageSrc: "assets/orange_kit_smile_fox.png",
        heart: "assets/like_icon.png",
        altText: "Orange kit smile fox",
        type: 'kit',
        description: "Lorem ipsum dolor sit amet, eu mei posse possim atomorum, vix cu fabellas assueverit. Vel ad option partiendo maiestatis, nec affert appetere te.",
    },
    {
        name: "Fennec smile fox",
        likes: 9897,
        imageSrc: "assets/fennec_smile_fox.png",
        heart: "assets/like_icon.png",
        altText: "Fennec smile fox",
        type: 'fennec',
        description: "Lorem ipsum dolor sit amet, eu mei posse possim atomorum, vix cu fabellas assueverit. Vel ad option partiendo maiestatis, nec affert appetere te.",
    },
    {
        name: "Red smile fox",
        likes: 1100,
        imageSrc: "assets/big_smile_fox.png",
        heart: "assets/like_icon.png",
        altText: "Big smile fox",
        type: 'red',
        description: "Lorem ipsum dolor sit amet, eu mei posse possim atomorum, vix cu fabellas assueverit. Vel ad option partiendo maiestatis, nec affert appetere te.",
    },
];

const mainSections = document.getElementById('main');
const filterBoxes = document.getElementById('filter_boxes');

const content = (item) => {
    return (

        `<div class="container ${item.type}">
                <img class="fox_img" src="${item.imageSrc}" alt="${item.altText}" width="305px" height="210px">
                <div class="main_block">
                    <div class="icon">
                        <h2>${item.name}</h2>
                        <i><img class="like_icon" src="${item.heart}" alt="like_icon" width ="10px" height="10px">${item.likes}</i>
                    </div>
                    <p>${item.description}</p>
                    <a class="read_more" href="#">Read more >></a>
                </div>
            </div>`
    );
};

const displayContents = (button, array, container) => {
    let listHTML = ``;
    array.forEach((item) => {
        if (item.type === button.dataset.type || button.dataset.type === "all") {
            listHTML += content(item);
        }
    });
    container.innerHTML = listHTML;
};

filterBoxes.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        displayContents(event.target, foxData, mainSections);
    }
});
displayContents(filterBoxes.querySelector('.all'), foxData, mainSections);
