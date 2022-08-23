function toggleLogin(btn){
    if(btn.innerText=="Login"){
        btn.innerText = "logout";
        }
    else{
        btn.innerText = "login";
        }
}

function btnRemover(btnRemover){
console.log("you clicked the remove func");
btnRemover.remove();
}

function increaseLikes(likesId){
    console.log("you liked", likesId);
    let spanElement = document.querySelector("#"+likesId);
    console.log(spanElement.innertext)
    let currentCount = spanElement.innerText;
    currentCount++;
    spanElement.innerText = currentCount;
    alert(currentCount + " Likes")
}