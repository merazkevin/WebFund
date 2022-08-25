function cookieRemover(id){
    console.log("yeeee", id)
    let elementToRemove = document.querySelector("."+ id);
    elementToRemove.remove();
}
function cartEmptyAlert(id){
    alert("your cart is empty");
}

function imageswitch(imgElement){
    imgElement.src = "./images/assets/succulents-2.jpg"
}
function switchBack(imgElement){
    imgElement.src = "./images/assets/succulents-1.jpg"
}