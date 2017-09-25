// Tomagotchi

// Description

// Let's use our front-end web development skills to create a "living" pet! We'll use HTML, CSS, and Javascript to interact with our pet.


// Requirements

// Create a repo for your tomagotchi pet

// make a commit after you finish each one of the following

// Create a class for you tomagotchi

// Display a character of your choice on the screen to represent your pet

// Display the following metrics for your pet. Hunger (1-10 scale), Sleepiness (1-10 scale), Boredom (1-10 scale), Age

// Add buttons to the screen to feed your pet, turn off the lights, and play with your pet

// Add the ability to name your pet

// Style the page

// Increase your pet's age every x minutes

// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.

// You pet should die if Hunger, Boredom, or Sleepiness hits 10.

// Morph your pet at certain ages

// Animate your pet across the screen


class tomagotchi{
	constructor(name, age, hunger, sleepiness, boredom){
		this.name = name;
		this.age = age;
		this.hunger = hunger;
		this.sleepiness = sleepiness;
		this.boredom = boredom;
	}
}