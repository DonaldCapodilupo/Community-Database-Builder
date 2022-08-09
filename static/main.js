/* global console*/
/*jshint esversion: 6 */

const car_list = [
    'Toyota', 'Honda', 'Chevrolet', 'Ford', 'Mercedes-Benz', 'Jeep', 'BMW', 'Porsche', 'Subaru', 'Nissan', 'Cadillac',
    'Volkswagen', 'Lexus', 'Audi', 'Volvo', 'Jaguar', 'GMC', 'Buick', 'Acura', 'Dodge', 'Hyundai',
    'Lincoln', 'Mazda', 'Land Rover', 'Tesla', 'Ram Trucks', 'Kia', 'Chrysler', 'Pontiac', 'Infiniti', 'Mitsubishi',
    'Oldsmobile', 'Fiat', 'Mini Cooper', 'Suzuki'
];

const colors = [
    "Black", "Silver", "White", "Grey", "Red", "Blue", "Brown", "Green", "Beige", "Orange", "Gold", "Yellow",
    "Purple"
];


function populateLists() {
    var brand_select_list = document.getElementById("Brand");
    var color_select_list = document.getElementById("Color");


    for (var i = 0; i < car_list.length; i++) {
        var opt = car_list[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        brand_select_list.appendChild(el);
    }

    for (var i = 0; i < colors.length; i++) {
        var opt = colors[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        color_select_list.appendChild(el);
    }
}

function getInput() {
    let house_number = document.getElementById("House_Number").value;
    let street_name = document.getElementById("Street").value;
    let brand = document.getElementById("Brand").value;
    let color = document.getElementById("Color").value;
    let license_plate_num = document.getElementById("License Plate #").value;

    console.log(house_number);
    console.log(street_name);
    console.log(brand);
    console.log(color);
    console.log(license_plate_num);


    return [house_number, street_name, brand, color, license_plate_num];

}


function displayInput(input_array) {
    var tbodyRef = document.getElementById('datatable').getElementsByTagName('tbody')[0];
    // Insert a row at the end of table
    var newRow = tbodyRef.insertRow();

    //Create 6 cells in the row and append the array data.
    for (let i=0; i<input_array.length; i++){
        var newCell = newRow.insertCell();
        var newText = document.createTextNode(input_array[i]);
        newCell.appendChild(newText);
    }





}


/*
function saveData(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function downloadContract() {
    console.log(assetArray)
    download("assets.txt", assetArray);

}
*/
