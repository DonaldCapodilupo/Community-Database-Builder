/*jshint esversion: 6 */

const politics = ["Unknown", "Democrat", "Republican", "Other"];

const gender = ["Male", "Female", "Other", "Unknown"];

const marital_status = ["Unknown", "Single", "In a Relationship", "Married", "Unknown"];


function populateLists() {
    var political_affiliation = document.getElementById("political_affiliation");
    var marital_status_dropdown = document.getElementById("marital_status");
    var gender_dropdown = document.getElementById("gender");

    for (let i = 0; i < politics.length; i++) {
        //console.log(car_data[i]["brand"]);
        var opt = politics[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        political_affiliation.appendChild(el);
    }

    for (let i = 0; i < gender.length; i++) {
        //console.log(car_data[i]["brand"]);
        var opt = gender[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        gender_dropdown.appendChild(el);
    }

    for (let i = 0; i < marital_status.length; i++) {
        //console.log(car_data[i]["brand"]);
        var opt = marital_status[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        marital_status_dropdown.appendChild(el);
    }


}


function showUserImage() {
    const img = document.getElementById('preview');
    const input = document.getElementById('user_img');
    input.onchange = function (ev) {
        const file = ev.target.files[0]; // get the file
        const blobURL = URL.createObjectURL(file);
        img.src = blobURL;
    };


}
