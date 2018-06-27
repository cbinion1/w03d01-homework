//console.log("linked");

//1. create a Class (JS class)
$(document).ready(function() {
    console.log( "ready!" );

class tamagotchi {
	constructor (hunger, boredom, sleepiness, age){
		this.hunger = hunger;
		this.boredom = boredom;
		this.sleepiness = sleepiness;
		this.age = age;
		
	}
	eat() {
			if (this.hunger < 10){
				this.hunger++;
				console.log("Finally! I'm starving over here!");
		} else {
			alert("Fool!! Evil Lincoln does not require food!")
		};

	}	
	sleep() {
			if (this.sleepiness < 10){
				this.sleepiness++;
				console.log("Yo! I'm sleepy y'all!");
		} else {
			alert("Wide awake, bitch!");
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
	// evilLincoln.hunger--;
	// evilLincoln.sleepiness--;
	// evilLincoln.boredom--;
	// evilLincoln.age++;

	if(seconds % 2 == 0){
		evilLincoln.hunger--;
	}

	if(seconds % 5 == 0){
		evilLincoln.boredom--;
	}
	if(seconds % 10 == 0){
		evilLincoln.sleepiness--;
	}
	if(seconds % 1 == 0){
		evilLincoln.age++;
	}

		console.log("Sleepiness " + evilLincoln.sleepiness)
		console.log("Hunger " + evilLincoln.hunger)
		console.log("Boredom " + evilLincoln.boredom)
		console.log("Age " + evilLincoln.age)

	 $('#food-bar').css("width", (evilLincoln.hunger * 10)+ "%");
	 $('#sleep-bar').css("width", (evilLincoln.sleepiness * 10)+ "%");
	 $('#boredome-bar').css("width", (evilLincoln.boredom * 10)+ "%");
	 $('#age-bar').css("width", (evilLincoln.age * 10)+ "%");

	if(evilLincoln.hunger == 0|| evilLincoln.boredom == 0 || evilLincoln.sleepiness == 0){
		alert("EVIL LINCOLN HAS DIED!!")
		
		clearInterval(timePassing);

	//$("#").empty().append(evilLincoln.hunger);
	// $('.sleepiness').empty().append(evilLincoln.sleepiness);
	// $('.boredom').empty().append(evilLincoln.boredom);
	// $('.age').empty().append(evilLincoln.age);
		}
		
	}

const timePassing = setInterval(timePasses, 1000);

$("#set-name").on("click", () => {

	$("h3").append($("#input-box").val());

	console.log("click");
	console.log($("#input-box").val());

	})

$("#food").on("click", () => {

		evilLincoln.eat();

	//console.log("feed me");
})

$("#sleepytime").on("click", () => {

		evilLincoln.sleep();

	//console.log("nap time bitches");

})

$("#play").on("click", () => {

		evilLincoln.play();

	//console.log("Iron helps us play!")
})


});



//4. Display following metrics; Hunger(1-10 scale), Sleepiness(1-10), Boredom(1-10), Age.

//11. Morph pet at certain ages.

//12. Animate the pet across the screen.





