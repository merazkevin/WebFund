

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

function increaseLikes(ID){
    
    let insideButtonContent = document.querySelector("#"+ ID);
    console.log(insideButtonContent.innerText);
    let currentCount = insideButtonContent.innerText;
    currentCount++;
    insideButtonContent.innerText = currentCount
}  

function removeCookieBox(id){
let elementRemoved = document.querySelector('.'+ id);
elementRemoved.remove()
}

function searchpuppies(){
let puppName = document.querySelector("#puppyNames");
    console.log(puppName.value)
    alert("you searched for " + puppName.value);
}

function playVideo(vidElement){
    vidElement.play();
}

function pauseVid(vidElement){
    vidElement.pause();

}
function switchImage(imgElement){
    if(imgElement.src == "http://127.0.0.1:5500/puppyGram/resources/puppy.jpeg"){
    imgElement.src = "./resources/anothaPuppy.jpeg"
    }
    else{
        imgElement.src = "./resources/puppy.jpeg"
    }
}

function chooseName(Id){
    console.log("yee");
    alert("you picked");
}