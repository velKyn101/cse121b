/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Kelvyn Diniz';
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let profilePicture = 'images/me.png';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
let yearElement = document.querySelector('#year');
let imageElement = document.querySelector('picture');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture)
imageElement.setAttribute('alt', `Profile Image of ${fullName}`)

/* Step 5 - Array */

let favoriteFood = ["Pizza", ' Hot Dog', ' Strawberry', ' Pineaple'];
foodElement.innerHTML = favoriteFood;
let otherFood = 'Fried Rice';
favoriteFood.push(otherFood);
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood}`;



