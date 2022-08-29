function editButton(element){
    var h1 = document.querySelector(".name");
        h1.innerText = "Kevins Side Piece"
        alert("you have changed profile "+ h1.innerText + " succesfully");
}

function userRemove(element){
    let user = document.querySelector(".card-list-item");
    user.remove();
}
