// automatically update year in footer
document.getElementById("copyright__year").innerHTML = (new Date().getFullYear());

// choose random fact of the day
function generateFact(require){
    fetch("./facts.json").then(response => {
        return response.json();
    }).then(jsondata => console.log(jsondata));

    var fact = facts[Math.floor(Math.random()*facts.length)];
    document.getElementById('fact__of__the__day--fact').innerHTML =
    '<p>' + fact.fact + '</p>';
}

// generate random images for gallery preview
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
            '<a href="#"><img src="img/gallery/' + image.img + '"></a>';
            oldImage = image;
        }
    }
}