window.addEventListener("load", ()=>{
    autoSlide();
})


function autoSlide(){
    setInterval(()=>{
        slide(getItemActiveIndex() + 1);
    }, 3000);//slide speed 3s
}
function slide(toIndex){
    const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
    const itemActive = document.querySelector(".carousel_item_active");

    // Corrected condition to check if toIndex >= itemsArray.length
    if(toIndex >= itemsArray.length){
        toIndex = 0; // Reset toIndex to 0 if it exceeds the array length
    }

    const newItemActive = itemsArray[toIndex];
    newItemActive.classList.add("carousel_item_pos_next");
    setTimeout(()=>{
        newItemActive.classList.add("carousel_item_next")
        itemActive.classList.add("carousel_item_next"); // Corrected to use itemActive instead of ItemActive
    },20);

    newItemActive.addEventListener("transitionend", ()=>{
        itemActive.className = "carousel_item";
        newItemActive.className = "carousel_item carousel_item_active";
    },{
        once: true
    });
}

function getItemActiveIndex(){
    const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
    const itemActive = document.querySelector(".carousel_item_active");
    const ItemActiveIndex = itemsArray.indexOf(itemActive);
    return ItemActiveIndex;
}