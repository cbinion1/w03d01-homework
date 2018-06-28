//console.log("linked");

$(document).ready(function() {
    console.log( "ready!" );
//-----------------------------Class and Instantiation------------------
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
//----------------------------------------------------------------------

//---------------------------------Timing Functionality------------------------------
//$(".gamego").on("click", (e) => {
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
	if(seconds % 6 == 0){
		evilLincoln.sleepiness--;
	}
	if(seconds % 10 == 0){
		evilLincoln.age++;
	}
	if(evilLincoln.age === 10){
		alert("Evil Lincoln has evolved!")
		$(".evil1").attr("src", "images/EvilLincoln.gif");
	}

		// console.log("Sleepiness " + evilLincoln.sleepiness)
		// console.log("Hunger " + evilLincoln.hunger)
		// console.log("Boredom " + evilLincoln.boredom)
		// console.log("Age " + evilLincoln.age)

	 $('#food-bar').css("width", (evilLincoln.hunger * 10)+ "%");
	 $('#sleep-bar').css("width", (evilLincoln.sleepiness * 10)+ "%");
	 $('#boredom-bar').css("width", (evilLincoln.boredom * 10)+ "%");
	 $('#age-bar').css("width", (evilLincoln.age * 10)+ "%");

	if(evilLincoln.hunger == 0|| evilLincoln.boredom == 0 || evilLincoln.sleepiness == 0){
		alert("EVIL LINCOLN HAS DIED!!")
		$(".evil1").attr("src", "images/deadLincoln.jpg")
		clearInterval(timePassing);
		}
		
	}

const timePassing = setInterval(timePasses, 1000);
//})
//--------------------------------------------------------------------------------------------

//--------------------Name and Game Start functionality-----------------------
$("#set-name").on("click", () => {

	$("h3").append($("#input-box").val());

	
	$("#set-name").replaceWith("<button class='gamego'>Start Game</button>");

	})
//----------------------------------------------------------------------------
//---------Button Functionality-------------
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
//-------------------------------------------

//---------------Movement functionality----------------------
function moveRight() {
    $(".evil1").animate({left: "+=50"}, 2000, function() {
        moveLeft();
    });
}

function moveLeft(){
    $(".evil1").animate({left: "-=50"}, 2000, function () {
        setTimeout(moveRight, 50);
    });
}

moveRight();
moveLeft();

setTimeout(moveRight, 50); 
//-------------------------------------------------------------

});





