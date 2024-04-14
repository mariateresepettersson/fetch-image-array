const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");


//Declare an async function to fetch image API
const getImage = async function () {
    const res = await fetch(
        "https://picsum.photos/v2/list?limit=100"
    );
    const images = await res.json();
    //Log out json in console
    console.log(images);
    selectRandomImage(images);
};

//Declare a function to randomly select an image form the API
const selectRandomImage = function (images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    //console.log(randomIndex);
    const randomImage = images[randomIndex];
    //console.log(randomImage);

    displayImage(randomImage);
};

//Declare a function to display image
const displayImage = function (randomImage) {
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;

    authorSpan.innerHTML = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
};

button.addEventListener("click", function () {
    //Call the function
    getImage();
});