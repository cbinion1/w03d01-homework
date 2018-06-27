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
			if (this.hunger < 10){
				this.hunger++;
				console.log("Finally!, I'm starving over here!");
		} else {
			alert("Fool!! Evil Lincoln does not require food!")
		};
	}	
	sleep() {
			if (this.sleepiness < 10){
				this.sleepiness++;
				console.log("Yo! I'm sleepy y'all!");
		} else {
			alert("Wide awake bitch!");
		}
	}	
	play() {
			if (this.boredom < 10){
				this.boredom++;
				console.log("Muwahahahahahaa!")
		} else {
			alert("Evil Lincoln is appeased! For now...")
	}
};
}
let evilLincoln = new tamagotchi(10, 10, 10, 1);

let seconds = 0;

const timePasses = () => {
			//console.log(`It has been ${seconds} seconds`)
	seconds++;
	evilLincoln.hunger--;
	evilLincoln.sleepiness--;
	evilLincoln.boredom--;
	evilLincoln.age++;

		console.log("Sleepiness " + evilLincoln.sleepiness)
		console.log("Hunger " + evilLincoln.hunger)
		console.log("Boredom " + evilLincoln.boredom)
		console.log("Age " + evilLincoln.age)

	if(evilLincoln.hunger == 0|| evilLincoln.boredom == 0 || evilLincoln.sleepiness == 0){
		alert("EVIL LINCOLN HAS DIED!!")
		
		clearInterval(timePassing);

	$("#foody").empty().append(evilLincoln.hunger);
	// $('.').empty().append(charlie.hunger);
	// $('.hungry').empty().append(charlie.hunger);
	// $('.hungry').empty().append(charlie.hunger);
		}
		
	}

const timePassing = setInterval(timePasses, 5000);

$("#set-name").on("click", () => {

	$("h3").append($("#input-box").val());

	console.log("click");
	console.log($("#input-box").val());

	})

$("#food").on("click", () => {
	let health = document.getElementById("foody")
		health.value += 1;

		evilLincoln.eat();

	//console.log("feed me");
})

$("#sleepytime").on("click", () => {
	let health = document.getElementById("sleepy")
		health.value += 1;

		evilLincoln.sleep();

	//console.log("nap time bitches");

})

$("#play").on("click", () => {
	let health = document.getElementById("bored")
		health.value += 1;

		evilLincoln.play();

	//console.log(evilLincoln.boredom)
	//console.log("Iron helps us play!")
})

const checkForUpdate = () => {

}


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





