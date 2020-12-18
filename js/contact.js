/*--------------------            last modified Date       -----------*/
let date = new Date();
let currentyear = date.getFullYear();
let lastupdate = document.lastModified;
document.getElementById("lastupdate").innerHTML = lastupdate;
document.getElementById("year").innerHTML = currentyear;

/*--------------------            hide nav       ---------------------*/
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide");

}

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}