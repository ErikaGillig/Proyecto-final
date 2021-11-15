//variables

let modal = document.querySelector('.modal');
let images = document.querySelectorAll('.gallery img');
let modalimg = document.querySelector('#mymodalimg');
let imgbox = document.querySelectorAll('.lists img');
let caption = document.querySelector('.caption-text');
let close = document.querySelector('.close');

images.forEach((images) =>{

    images.addEventListener('click',() =>{
        modal.style.display = "block";
        modalimg.src = images.src;
        caption.innerHTML = images.alt;

    })
})

imgbox.forEach( img => img.addEventListener("click", imgLightbox));

function imgLightbox (event) { modalimg.src = event.target.src;}

close.addEventListener("click", () => {
        modal.style.display = "none";
    })

