

const galleryFilter = document.getElementById("galleryFilter");
const galleryItems = document.querySelectorAll(".gallery>div");

galleryFilter.addEventListener("change",()=>{
    const category = galleryFilter.value; // All, Puppy, Adult,Young

    galleryItems.forEach(item=>{
        if (category === "all"){
            //If All Select Then ShowAll
            item.style.display = "block";
        }else if (item.className.includes(category)){
            // If Div Class Is Match Selected Category Then Show
            item.style.display = "block";
        }else {
            // Remaining Hide Please
            item.style.display = "none"
        }
    })
})

galleryItems.forEach(item =>{
    item.addEventListener("mouseover",()=>{
        item.style.transform = "scale(1.1)";
        item.style.transition = "0.5s";
    })
    item.addEventListener("mouseout",()=>{
        item.style.transform = "scale(1)"
    })
})
