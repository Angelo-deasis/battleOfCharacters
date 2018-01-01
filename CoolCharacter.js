var inquirer = require('inquirer');
var fs = require('fs')


function StartGame(){
inquirer
  .prompt([
    {
      type: 'checkbox',
      message: 'Make your selections',
      name: 'selections',
      choices: [
        {
          name: "Character Create"
        },
        { 
          name: "Ready for battle!"
        }
        ],
    }
    ])
    .then(answers => {
      //console.log(answers.selections)
      if (answers.selections == "Character Create"){

        //====create character function
        inquirer
          .prompt([
            {
              type: 'input',
              message: 'Type a name!',
              name: 'name',
            },
            {
              type: 'input',
              message: 'Type your Type!',
              name: 'type',
            },
            {
              type: 'input',
              message: 'Type your HP! ',
              name: 'hp',
            },
            {
              type: 'input',
              message: 'Type your Attack Points! ',
              name: 'atk',
            },
            {
              type: 'input',
              message: 'Type your Defense Points! ',
              name: 'def',
            }
            ])
          

            .then(answers => {
              var playerInfo = ("\n==============\nName: "+answers.name + 
                         "\n" + "Type: " + answers.type + 
                         "\n" + "HP: " + answers.hp + 
                         "\n" + "Atk Pts: "+answers.atk + 
                         "\n" + "Def Pts: " + answers.def + "\n==============\n");
              checkStat();
              function checkStat(){
                 if (answers.hp > 100 || answers.atk > 50 || answers.def > 100) {
                  
                  console.log(" HP cannot exceed 100 pts\n ATTACK cannot exceed 50 pts\n DEFENSE cannot exceed 100 pts!");
                   StartGame();
                 } else {
                    fs.appendFile("playerInfo.txt", playerInfo, function (err) {
                      console.log("info saved!");  
                    }); 
                 }
              }
                   
            });
          
        //========
        
      } else if (answers.selections == "Ready for battle!"){
        console.log("Game on!");

        inquirer
  .prompt([
    {
      type: 'checkbox',
      message: 'Make your selections',
      name: 'selections',
      choices: [
        {
          name: "Attack Enemy!"
        },
         {
          name: "Defense Mode!"
        },
         {
          name: "Heal!"
        },
        { 
          name: "Dodge!"
        }
        ],
    }
    ])
        
      }
    });
 }

 StartGame();

var Character = function(name,type,life,atk,def) {
	this.name = name; 
  this.type = type
	this.life = life;
	this.atk = atk;
	this.def = def;
	
	this.displaystats = function(){

	console.log(char1);
	}
	// this.displaystats = function() {
	// var createChar = new Character(this.name,this.life,this.atk,this.def);
}



var char1 = new Character(this.inputName, this.inputType, this.inputPower, this.inputAtk, this.inputDef);
// var char2 = new Character ("Bob", Fire, 300, 10, 3);
// var char3 = new Character ("Yankee Noodle", Annoying Ray, 100, 15, 0);

//char1.displaystats();


//create attack functions 
function attackChar() {
	char2.life - (char1.atk - char2.def);
	//(char2.life - (char1.atk - char2.def));
}

function attackFromChar2() {

}

