var inquirer = require('inquirer');

var Character = function(name,life,atk,def) {
	this.name = name; 
	this.life = life;
	this.atk = atk;
	this.def = def;
	console.log();
	// this.displaystats = function() {
	// var createChar = new Character(this.name,this.life,this.atk,this.def);

	// }
}

var char1 = new Character("Timmy", 200, 7, 5);
var char2 = new Character ("Bob", 300, 10, 3);
var char3 = new Character ("Yankee Noodle", 100, 15, 0);


console.log(char1);
console.log(char2);

//create attack function 
function attackFromChar1() {
	console.log(char2.life - (char1.atk - char2.def));

	//(char2.life - (char1.atk - char2.def));
}

attackFromChar1();





