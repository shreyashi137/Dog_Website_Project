
// // Adopt Page Js


// // Filter Functionality

const breedFilter = document.getElementById("breedFilter");
const ageFilter = document.getElementById("ageFilter");
const priceFilter = document.getElementById("priceFilter");

//Select All Dogs Cards
const dogCards =   document.querySelectorAll(".dog-card");




// Filter Dogs Function
function filterDogs(){
    const breedValue = breedFilter.value.toLowerCase();
    const ageValue = ageFilter.value;
    const priceValue = priceFilter.value;

    dogCards.forEach((card)=>{
        const name = card.querySelector("h3").textContent.toLowerCase();
        const ageText = card.querySelector("p:nth-of-type(1)").textContent;
        const priceText = card.querySelector("p:nth-of-type(2)").textContent;
        // const imgAlt = card.querySelector("img").alt.toLowerCase();

        const age = parseInt(ageText.replace(/\D/g,""));
        const price = parseInt(priceText.replace(/\D/g,""));

        let show = true;

        // Breed Filter
        if (breedValue !== "all" && !name.includes(breedValue)){
            show = false;
        }


        // Age Filter
        if (ageValue !== "all"){
            if (ageValue === "puppy" && age >1) show = false;
            if ( ageValue === "young" && (age <=1 || age > 3)) show = false;
            if (ageValue === "adult" && age <3) show = false;
        }


        // Price Filter
        if (priceValue !== "all"){
            if (priceValue === "0-4000" && price>4000) show = false;
            if (priceValue === "4001-5000" && (price <4001 || price>5000)) show = false;
            if (priceValue === "5001-6000" && (price <5001|| price >6000)) show = false;
            if (priceValue === "6001+" && price <= 6000) show = false;
        }

        if (show){
            card.style.display = "block"
        }else{
            card.style.display = "none"
        }
        

    })
}


//  Apply Fitlers When Changes
breedFilter.addEventListener("change", filterDogs);
ageFilter.addEventListener("change",filterDogs);
priceFilter.addEventListener("change",filterDogs);



// Toggle Dog Information On Click
dogCards.forEach(card =>{
    const dogImage = card.querySelector("img");
    const dogInfo = card.querySelector(".dog-info");

    dogImage.addEventListener("click",()=>{
        if (dogInfo.style.display === "block"){
            dogInfo.style.display = "none";// Hide
        }else{
            dogInfo.style.display = "block";//Show
        }
    })
})
        

//  Play Dog Sound On Name Click
dogCards.forEach(card =>{
    const dogName = card.querySelector("h3");
    let audio = null;


dogName.addEventListener("click",()=>{
    //Extract Dog's Name From The H3 Text
    let fullName = dogName.textContent;
    let nameMatch = fullName.match(/\((.*?)\)/);

    if (nameMatch){
        dogActualName = nameMatch[1]; // Brackets Madal Name
    } else {
        dogActualName = fullName // Brackets Nasel Tar Full Name Ghya
    }



    // Format Name TO Match Your Sound File Names
    // Example: Buddy[]


    let soundFile = "";

    if(dogActualName.toLowerCase()==="buddy"){
        soundFile = "Labroder_dog-barking.mp3";

    } else if ( dogActualName.toLowerCase()==="bella"){
        soundFile = "Beagle_Dog-Barking.mp3";

    } else if (dogActualName.toLowerCase()==="max"){
        soundFile = "GermanShephered_Dog-Barking.mp3";
        
    } else if (dogActualName.toLowerCase()==="charlie"){
        soundFile = "Pug_Dog-Barking.mp3";

    } else if (dogActualName.toLowerCase()==="lucy"){
        soundFile = "Bulldog_Dog-Barking.mp3";

    } else if (dogActualName.toLowerCase()==="rocky"){
        soundFile = "Golden_Dog_Barking.mp3";

    }else if (dogActualName.toLowerCase()==="daisy"){
        soundFile = "ShihTzu_Dog-Barking.mp3";

    }else if (dogActualName.toLowerCase()==="milo"){
        soundFile = "Dalmatian_Dog-Barking.mp3";

    }else if (dogActualName.toLowerCase()==="luna"){
        soundFile = "Husky_Dog-Barking.mp3";

    }else if (dogActualName.toLowerCase()==="oscar"){
        soundFile = "Cocker_Dog-Barking.mp3";

    }else if (dogActualName.toLowerCase()==="boxi"){
        soundFile = "Boxer_Dog-Barking.mp3";

    }else if (dogActualName.toLowerCase()==="domi"){
        soundFile = "Doberman_Dog-Barking.mp3";

    }else if (dogActualName.toLowerCase()==="don"){
        soundFile = "Grate-Dane_Dog-Barking.mp3";
    }


         
        
   
    if( !soundFile){
        console.log("No Sound Found For:",dogActualName);
        return;
    }

    // Toggle
    if (!audio) {
        audio = new Audio(`Dog_Sound/${soundFile}`);
        audio.play();
    }else if (audio.paused){
        audio.play();
    }else {
        audio.pause();
        audio.currentTime = 0;
    }
})
})
