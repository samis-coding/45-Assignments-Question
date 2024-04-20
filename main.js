"use strict";
/*
// Question no.1


let nam:string = "Eric";
console.log(`Hello ${nam},would you like to learn some Python today?`)


//Question no.2

const personName: string = "Samillah";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, (char) => char.toUpperCase()));


//Question no.3

console.log('Albert Einstein once said, “A person who never made a mistake never tried anything new.”');

//Question no.4
let fav_person:string = "Albert Einstrin";
const message:string = "A person who never made a mistake never tried anything new.";
console.log(message);

//Question no.5

const personnName: string = "\t \n Samiullah \t \n";
console.log(personnName);
console.log(personnName.trim());


//Question no.6

console.log(5 + 3); // Addition
console.log(16 - 8); // Subtraction
console.log(4 * 2); // Multiplication
console.log(24 / 3); // Division


//Question no.7

console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);


//Question no.8

// Store favorite number in a variable
let favoriteeNumber: number = 7;

// Create a message revealing the favorite number
let messagee: string = `My favorite number is ${favoriteeNumber}.`;

// Print the message
console.log(message);



//Question no.9

// Store favorite number in a variable
let favoriiteNumber: number = 7;

// Create a message revealing the favorite number
let meessage: string = `My favorite number is ${favoriiteNumber}.`;

// Print the message
console.log(message);

//printing the sum of 5 and 3
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);



//Question no.10

let names: string[] = ["Alice", "Bob", "Charlie", "David"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}


//Question no.11

let namess: string[] = ["Alice", "Bob", "Charlie"];
for (let name of namess) {
    console.log(`Hello ${name}, would you like to learn some TypeScript today?`);
}

//Question no.12
let transports: string[] = ["Honda motorcycle", "Tesla car", "Bianchi bicycle","Tesla truck"];

for (let j = 0; j < transports.length;j++ ) {
    console.log(`I would like to own a ${transports[j]}.`);
};
//Question no.13
let guests: string[] = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];

for (let guest = 0; guest < guests.length;guest++){
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
};
//Question no.14

let unableToAttend = "Nikola Tesla";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest
let newGuest = "Leonardo da Vinci";
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
//Question no.15

let gests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests
gests.unshift("Isaac Newton");
gests.splice(gests.length / 2, 0, "Charles Darwin");
gests.push("Ada Lovelace");

gests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

// Qustion no. 16

console.log("Unfortunately, I can only invite two people for dinner.");

while (gests.length > 2) {
    let removedGuest = gests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

gests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

gests.splice(0, gests.length);
console.log(gests); // Shows an empty list

//Question no.17

let places: string[] = ["New Zealand", "Iceland", "Japan", "Switzerland", "Norway"];

console.log("Original order:", places);

console.log("Alphabetical order:", [...places].sort());

console.log("Original order:", places);

console.log("Reverse alphabetical order:", [...places].sort().reverse());

console.log("Original order:", places);

places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("Original order:", places);

places.sort();
console.log("Alphabetical order:", places);

places.reverse();
console.log("Reverse alphabetical order:", places);

//Question no.18

 gests = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci", "Isaac Newton", "Charles Darwin"];
console.log(`I am inviting ${gests.length} people to dinner.`);

//Question no.19

let countries: string[] = ["Japan", "Canada", "New Zealand", "Iceland", "Switzerland"];
console.log("Countries I'd like to visit:", countries);

//Question no.20

let book: { title: string; author: string; yearPublished: number } = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    yearPublished: 1937
};
console.log(`Book Info: ${book.title} by ${book.author}, published in ${book.yearPublished}`);

//Question no.21

let friends: string[] = ["Alice", "Bob", "Charlie"];

console.log(friends[3]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
friends[2] = "Charlie"; // Correcting the error by accessing a valid index.

//Question no.22

let car = 'BMW';

console.log("Is car == 'BMW'? I predict True.");
console.log(car == 'BMW'); // True

console.log("Is car == 'Elantra'? I predict False.");
console.log(car == 'Elantra'); // False

let food = "Macroni";

console.log("Is food == 'Macroni'? I predict True.");
console.log(food == "Macroni");

console.log("Is food == 'Pizza'? I predict False.");
console.log(food == "Pizza");

let animl = 'cat';
console.log(animl == 'cat');
console.log(animl == 'dog');

let bird = 'Eagle';
console.log(bird == 'Eagle');
console.log(bird == 'parrot');

let trip = 'Makkah';
console.log(trip == 'Makkah');
console.log(trip == 'Dubai')

//Question no. 23

// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple"); // True


// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True

// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True

// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True

// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True

// Question no.24

let alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points!");
}

// Question no.25

alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien!");
} else {
    console.log("You just earned 10 points.");
}

alien_color = "yellow";
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien!");
} else {
    console.log("You just earned 10 points.");
}
// Question no.25

alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien!");
} else {
    console.log("You just earned 10 points.");
}

alien_color = "yellow";
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien!");
} else {
    console.log("You just earned 10 points.");
}
// Question no.26

alien_color = "green";
if (alien_color == "green") {
    console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
} else if (alien_color == "red") {
    console.log("You earned 15 points.");
}

alien_color = "yellow";
if (alien_color == "green") {
    console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
} else if (alien_color == "red") {
    console.log("You earned 15 points.");
}

alien_color = "red";
if (alien_color == "green") {
    console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
} else if (alien_color == "red") {
    console.log("You earned 15 points.");
}


// Question no.27

let age: number = 25;

if (age < 2) {
    console.log("The person is a baby.");
} else if (age < 4) {
    console.log("The person is a toddler.");
} else if (age < 13) {
    console.log("The person is a kid.");
} else if (age < 20) {
    console.log("The person is a teenager.");
} else if (age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

// Question no.28

let favorite_fruits: string[] = ["apples", "bananas", "cherries"];

if (favorite_fruits.includes("bananas")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("apples")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("garphes")) {
    console.log("You really like garphes!");
}
if (favorite_fruits.includes("mqango")) {
    console.log("You really like mango!");
}
else {
    console.log("You really like peach!");
}

// Question no.29

let usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];

usernames.forEach(username => {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});
// Question no.30

 usernames = [];

if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    console.log(`Hello ${usernames}, thank you for logging in again.`)
}
// Question no.31

let current_users: string[] = ["user1", "admin", "user3", "user4", "user5"];
let new_users: string[] = ["User1", "User6", "user7", "admin", "User9"];

new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
});

// Question no.32

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(number => {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    } else if (number === 2) {
        suffix = "nd";
    } else if (number === 3) {
        suffix = "rd";
    }
    console.log(`${number}${suffix}`);
});

// Question no.33

let pizzas: string[] = ["pepperoni", "margherita", "hawaiian"];

pizzas.forEach(pizza => {
    console.log(`I like ${pizza} pizza.`);
});
console.log("I really love pizza!");

// Question no.34

let animals: string[] = ["dog", "cat", "rabbit"];

animals.forEach(animal => {
    console.log(`A ${animal} would make a great pet.`);
});
console.log("Any of these animals would make a great pet!");
// Question no.35

function make_shirt(size: string, message: string) {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt("medium", "Code is Life");

// Question no.36

function makeshirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

makeshirt();
makeshirt("medium");
makeshirt("small", "Dive into Coding");

// Question no.37

function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo", "Japan");

// Question no.38

function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));

// Question no.39

function make_album(artist: string, title: string, tracks?: number) {
    let album: { artist: string, title: string, tracks?: number } = { artist, title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}

console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));
// Question no.40

let magicians: string[] = ["Alice", "David", "Chris"];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);

// Question no.41

function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}

make_great(magicians);
show_magicians(magicians);
// Question no.42

let magician: string[] = ["Alice", "David", "Chris"];

function makegreat(magicians: string[]): string[] {
    let greatMagician:any = [];
    magicians.forEach(magician => {
        greatMagician.push(`${magician} the Great`);
    });
    return greatMagician; // Added return statement
}

let greatMagicians = make_great(magicians.slice()); // Corrected function name and added missing semicolon
console.log("Original magicians:");
show_magicians(magicians); // It seems like this function is not defined
console.log("Great magicians:");
//show_magicians(greatMagician); // 'greatMagician' variable is not accessible outside the function scope

// Question no.43

function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}

make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");

// Question no.44

function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
    let car:any = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));

*/
