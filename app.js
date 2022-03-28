// automatically update year in footer
document.getElementById("copyright__year").innerHTML = (new Date().getFullYear());

// choose random fact of the day
function generateFact(require){
    facts = [{
        "fact": "River otters can hold their breath for up to eight minutes."
    },
    {
        "fact": "Sea otters hold hands to stop them from drifting apart and losing each other when they sleep in the water."
    },
    {
        "fact": "It is advised to keep atleast 5 kayak lengths from any wild otter you encounter."
    },
    {
        "fact": "Ever wonder where otters actually store stuff for safe keeping? They have a loose patch of skin underneath their armpit to store both the food they’ve foraged and their rock to crack it open with."
    },
    {
        "fact": "An otter's lung capacity is 2.5 times greater than that of similar-sized land mammals."
    },
    {
        "fact": "Sea otters can have a pup any time of the year."
    },
    {
        "fact": "River otters perform \"scat dances\" by stomping their hind feet and lifting their tail. They then leave droppings called spraint."
    },
    {
        "fact": "Sea otters don't just have the densest fur of all otters - they have the densest fur of all animals. Otters have as many as 2.6 million hairs per square inch."
    },
    {
        "fact": "Most otters have sharp claws at the end of each toe, which helps them to grab prey. However, there are three species of otter that have blunt claws or none at all. They are the Asian small-clawed otter, African clawless otter, and Congo clawless otter. These otters also have less webbing between their digits. This combination allows them to have greater nimbleness when foraging."
    },
    {
        "fact": "Baby otters usually are called pups. They can also be called kits or kittens. Female otters are sows, and males are boars. Otter groups are called a family, bevy, lodge, or a romp. The latter is the most common term for a group of otters on land. A group of otters in the water is most often called a raft."
    },
    {
        "fact": "Sea otters eat 25 percent of their body weight in food every day."
    },
    {
        "fact": "Otters are part of the Mustelidae family, which is a family of carnivorous mammals that includes skunks, weasels, wolverines, and badgers."
    },
    {
        "fact": "Thirteen different otter species exist around the globe. "
    },
    {
        "fact": "The majority of otters spend most of their time on land."
    },
    {
        "fact": "Otter poop has such a unique smell that it has even ended up with its own name - spraint."
    },
    {
        "fact": "Some fishermen in Bangladesh use trained otters to chase fish into their nets. The otters are kept on leashes to ensure their captivity."
    },
    {
        "fact": "Male otters sometimes hold pups ransom to force their mothers to give up some of their food."
    },
    {
        "fact": "The word otter derives from the old english word \"otor\" or \"oter\"."
    },
    {
        "fact": "The largest otter is the giant otter. It grows from 4.9 to 5.9 feet (1.5 to 1.8 meters) long. Though it is the largest, it isn’t the heaviest. This distinction goes to the sea otter. Males weigh up to 90 lbs. (41 kilograms). Hefty appetites aren't unique to giant otters: All otters eat 20 percent to 33 percent of their body weight each day. They spend around five hours each day foraging. They tuck prey into pockets of loose skin under their arms and use rocks as tools to open shellfish."
    },
    {
        "fact": "Otters' big appetites protect kelp forests by them eating sea urchins. Without sea otters, the urchin population booms and destroys the kelp forest habitat."
    }]

    var fact = facts[Math.floor(Math.random()*facts.length)];
    document.getElementById('fact__of__the__day--fact').innerHTML =
    '<p>' + fact.fact + '</p>';
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