AG.Map = function(){};
  
var helper = {
  move: function (key, direction) {
    console.log(direction)
  }

}

//player object to help manage player stuff
var playerStuff = {
  
}

AG.Map.prototype = {
  preload: function () {
    game.load.image("robFrontIMG", "Assets/Sprites/robEagle.png")
    game.load.image("robsideIMG", "Assets/Sprites/robSide.png")
    game.load.image("robBackIMG", "Assets/Sprites/robBack.png")
    
  },
  
  create: function(){
    console.log('You are in the Map state');
    game.stage.backgroundColor = '#0000FF';
    
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    playerStuff.player = game.add.sprite (game.centerX, game.centerY, "robFrontIMG");
    playerStuff.player.scale.x = 0.3;
    playerStuff.player.scale.y = 0.3;
    
    game.physics.enable(playerStuff.player);

  },
  update: function(){
    //WASD keys to do stuff
    game.input.keyboard.addKey(Phaser.Keyboard.W).onDown.add(helper.move, null, null, 1);
    game.input.keyboard.addKey(Phaser.Keyboard.A).onDown.add(helper.move, null, null, 2);
    game.input.keyboard.addKey(Phaser.Keyboard.S).onDown.add(helper.move, null, null, 3);
    game.input.keyboard.addKey(Phaser.Keyboard.D).onDown.add(helper.move, null, null, 4);
  }
};