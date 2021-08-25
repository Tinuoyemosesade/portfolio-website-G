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
