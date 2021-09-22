//create an object using bracket and dot notation 

var game ={};

game.murderer = "??"

game.weapons = [
    'laser', 
    'guns', 
    'dish soap'
]

game.name = [];
game.name[0] ="mrs white";
game.name.push('mr green')

// destructuring
{"name":"Rusty", "room": "kitchen", "weapon":"candlestick"}
const { name, weapon, room } = {
    "name":"Rusty", 
    "room": "kitchen", 
    "weapon":"candlestick"
}

const game = {
    'suspects': [{
        name: "Rusty",
        color: "orange"
    }, {
        name: "Miss Scarlet",
        color: "red"
    }]
}

//loop through array in object property
function foo() {
    for (let i = 0; i < game.suspects.length; i++){
        console.log(game.suspects[i]);
    }
}
foo();

var gameLoop = function() {
    for (var i = 0; i < game.suspects.length; i++){
        for (var key in game.suspects[i]) {
            if (game.suspect[i][key] === "Rusty"){
                console.log ('found em')
            } else {

                console.log ('next time')
            }
        }
    }
}