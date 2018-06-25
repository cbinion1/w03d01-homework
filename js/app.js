console.log("linked");

//1. create a Class (JS class)

class evilLincoln {
	constructor (hunger, boredom, sleepiness){
		this.hunger = hunger;
		this.boredom = boredom;
		this.sleepiness = sleepiness;

		eat(){
			this.hunger = hunger--;
		}
		sleep(){
			this.sleepiness = sleepiness--;
		}
		play(){
			this.boredom = boredom--;
		}
	}
}

const lincoln = new evilLincoln(10, 10, 10){

}

//2. Instantiate the tamagotchi

//3. Display character of choice on the screen to represent pet

//4. Display following metrics; Hunger(1-10 scale), Sleepiness(1-10), Boredom(1-10), Age.

//5. Add buttons to screen to feed pet, make it sleep, and play with it.

//6. Add ability to name the pet.

//7. Style the page.

//8. Increase pet's age every X minutes.

//9. Increase the pet's Hunger, Boredom, and Sleepiness at interval of your choosing.

//10. Pet should die if any of the metrics hit 10.

//11. Morph pet at certain ages.

//12. Animate the pet across the screen.





