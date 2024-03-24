/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Kelvyn Diniz",
    photo: "images/me.png",
    favoriteFoods: ["Pizza", "Hot Dog", "Strawberry", "pineapple"],
    hobbies: ["Fishing", "Hiking", "Cooking", "Muay Thai"],
    placesLived: []
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({
    place: "Teresina, Brazil",
    length: "2 years"
});
myProfile.placesLived.push({
    place: "Sao Paulo, Brazil",
    length: "8 months"
});
myProfile.placesLived.push({
    place: "Curitiba, Brazil",
    length: "18 years"
});

/* DOM Manipulation - Output */

document.querySelector('#name').textContent = myProfile.name;

/* Name */
let photoElement = document.querySelector('#photo');
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

/* Photo with attributes */



/* Favorite Foods List*/

var ulElement = document.getElementById("favorite-foods");

myProfile.favoriteFoods.forEach(function(food) {
    
    var liElement = document.createElement("li");
    
    liElement.textContent = food;
    
    ulElement.appendChild(liElement);
});

/* Hobbies List */

var ulElement = document.getElementById("hobbies");

myProfile.hobbies.forEach(function(hobby) {
    
    var liElement = document.createElement("li");
    
    liElement.textContent = hobby;
    
    ulElement.appendChild(liElement);
});

/* Places Lived DataList */

var dlElement = document.getElementById("places-lived");

myProfile.placesLived.forEach(function(placeObj) {
    var dtElement = document.createElement("dt");
    
    // Set the text content of the <dt> element to the place property
    dtElement.textContent = placeObj.place;
    
    // Create a new <dd> element
    var ddElement = document.createElement("dd");
    
    // Set the text content of the <dd> element to the length property
    ddElement.textContent = placeObj.length;
    
    // Append the <dt> and <dd> elements as children of the <dl> element
    dlElement.appendChild(dtElement);
    dlElement.appendChild(ddElement);
});
