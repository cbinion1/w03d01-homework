console.log("linked");

//1. create a Class (JS class)
$(document).ready(function() {
    console.log( "ready!" );

class tamagotchi {
	constructor (hunger, boredom, sleepiness, age){
		this.hunger = 10;
		this.boredom = 10;
		this.sleepiness = 10;
		this.age = 1
		
	}
	eat() {
			if (hunger < 10){
				this.hunger++;
				alert("Finally!, I'm starving over here!");
		} else {
			alert("Fool!!  Evil Lincoln does not require food!")
		};
	}	
	sleep() {
			if (sleepiness < 10){
				this.sleepiness++;
				alert("Yo! I'm sleepy y'all!");
		} else {
			alert("Wide awake bitch!");
		}
	}	
	play() {
			if (boredom < 10){
				this.boredom++;
				alert("Muwahahahahahaa!")
		} else {
			alert("Evil Lincoln is appeased!  For now...")
	}
};




	}
let evilLincoln = new tamagotchi(10, 10, 10, 1);

let seconds = 0;

const timePasses = () => {
			//console.log(`It has been ${seconds} seconds`)
			seconds++;
			tamagotchi.hunger--;
			tamagotchi.sleepiness--;
			tamagotchi.boredom--;

// 		console.log(`Sleepiness $tamagotchi.sleepiness`)
// 		console.log(`Hunger $tamagotchi.hunger`)
// 		console.log(`Boredom $tamagotchi.boredom`)
	}

const timePassing = setInterval(timePasses, 5000);

$("#set-name").on("click", () => {

	console.log("click");
	console.log($("#input-box").val());

	})

$("")








});
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





