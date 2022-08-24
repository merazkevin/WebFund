

function removeButton(element){
element.remove();
}


function toggleLogin(log){
if(log.innerText == "login"){
    log.innerText = "logout"
    }
    else{
    log.innerText = "login"
    }
}

function increaseLikes(elementID){
    console.log("i Like", elementID);
    let insideButtonContent = document.querySelector("#"+ elementID);
    console.log(insideButtonContent.innerText);
    let currentCount = insideButtonContent.innerText;
    currentCount++;
    insideButtonContent.innerText = currentCount
}  

function removeCookieBox(id){
let elementRemoved = document.querySelector('.'+ id);
elementRemoved.remove()
}