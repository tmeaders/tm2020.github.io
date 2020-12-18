/*--------------------            last modified Date       -----------*/
let date = new Date();
let currentyear = date.getFullYear();
let lastupdate = document.lastModified;
document.getElementById("lastupdate").innerHTML = lastupdate;
document.getElementById("year").innerHTML = currentyear;

/*--------------------            hide nav       ---------------------*/
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");

}
/*--------------------            rental prices       ---------------*/
const requestURL = 'https://tmeaders.github.io/tm2020.github.io/rentals.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);

        const rentals = jsonObject['rentals'];

        var x = 1;

        for (let i = 0; i < rentals.length; i++) {


            if (x <= 6) {
                document.getElementById('type' + x).textContent = rentals[i].type;

                document.getElementById('rHalf' + x).textContent = '$' + rentals[i].reservation.half;
                document.getElementById('rFull' + x).textContent = '$' + rentals[i].reservation.full;

                document.getElementById('wHalf' + x).textContent = '$' + rentals[i].walkins.half;
                document.getElementById('wFull' + x).textContent = '$' + rentals[i].walkins.full;

                x++

            }



        };
    });