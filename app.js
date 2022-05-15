import facts from "./facts.json"

// automatically update year in footer
document.getElementById("copyright__year").innerHTML = (new Date().getFullYear());

// choose random fact of the day
function generateFact(){
    const {facts} = require('./facts.json');

    var fact = facts[Math.floor(Math.random()*facts.length)];
    document.getElementById('fact__of__the__day--fact').innerHTML =
    '<p>' + fact.fact + '</p>';
    console.log(fact)
}

// create as many random, non duplicate images as needed 
function generateImage(){
    var images = [
        {
            img: "hi.jpg"
        },
        {
            img: "boop.gif"
        },
        {
            img: "cuddling.jpg"
        },
        {
            img: "cuddling toy.jpg"
        },
        {
            img: "flustered.jpg"
        },
        {
            img: "fat.jpg"
        },
        {
            img: "curious.jpg"
        },
        {
            img: "otter-312344_960_720.jpg"
        },
        {
            img: "otter-4444711_960_720.jpg"
        },
        {
            img: "otter-2549856_960_720.jpg"
        },
        {
            img: "otter-498046_960_720.jpg"
        },
        {
            img: "relaxed-ge85306dee_1920.jpg"
        },
        {
            img: "otter-g413a547e7_1920.jpg"
        },
        {
            img: "otter-g11dd8483a_1280.jpg"
        }
    ];

    // prevent duplicates
    var oldImage;
    
    for (let i = 1; i <= 2; i++){
        image = images[Math.floor(Math.random()*images.length)];
        if (image == oldImage){
            i--;
            continue;
        }else{
            document.getElementById('gallery__preview--img' + i).innerHTML =
            '<a href="gallery.html"><img src="img/gallery/' + image.img + '"></a>';
            oldImage = image;
        }
    }
}