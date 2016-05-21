AG.Menu = function(){};

AG.Menu.prototype = {
  preload: function (){
    game.load.spritesheet("creditsButtonTemp", "Assets/Sprites/creditsButtonTemp.png", 314, 124);
    game.load.spritesheet("playButtonTemp", "Assets/Sprites/playButtonTemp.png", 314, 125 );
    game.load.spritesheet("settingsButtonTemp", "Assets/Sprites/settingsButtonTemp.png", 314, 127);

  },
	
  create: function(){
    console.log('You are in the Menu state');
    game.stage.backgroundColor = '#fff';
    
    game.add.button(game.world.centerX, game.world.centerY, "creditsButtonTemp", null, null, 1, 2, null, 3)
    game.add.button(game.world.centerX, game.world.centerY/3, "playButtonTemp", null, null, 1, 2, null, 3)
    game.add.button(game.world.centerX, game.world.centerY*2/3, "settingsButtonTemp", null, null, 1, 2, null, 3)


  },
  update: function(){

  }
};