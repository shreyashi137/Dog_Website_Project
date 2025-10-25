const blogCard = document.querySelectorAll(".blog-card");

blogCard.forEach(Card=>{
    Card.addEventListener("mouseover",()=>{
        Card.style.transform = "scale(1.03)";
        Card.style.transition = "0.3s";
    })
    Card.addEventListener("mouseout",()=>{
        Card.style.transform = "scale(1)";
    })
})
