AG.Map = function(){};


  


var helper = {
  move: function () {
    console.log("moving")
  }

}

AG.Map.prototype = {
  preload: function () {
    
    
  },
  
  create: function(){
    console.log('You are in the Map state');
    game.stage.backgroundColor = '#0000FF';
    

  },
  update: function(){
    game.input.keyboard.addKey(Phaser.Keyboard.W).onDown.add(helper.move, this);
    game.input.keyboard.addKey(Phaser.Keyboard.A).onDown.add(helper.move, this);
    game.input.keyboard.addKey(Phaser.Keyboard.S).onDown.add(helper.move, this);
    game.input.keyboard.addKey(Phaser.Keyboard.D).onDown.add(helper.move, this);
  }
};