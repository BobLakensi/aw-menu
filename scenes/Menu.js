AG.Menu = function(){};

AG.Menu.prototype = {
  preload: function (){
    game.load.spritesheet("creditsButtonTemp", "Assets/Sprites/creditsButtonTemp.png", 314, 124);
    game.load.spritesheet("playButtonTemp", "Assets/Sprites/creditsButtonTemp.png", 314, 125 );
    game.load.spritesheet("settingsButtonTemp", "Assets/Sprites/creditsButtonTemp.png", 314, 127);

  },
	
  create: function(){
    console.log('You are in the Menu state');
    game.stage.backgroundColor = '#fff';

  },
  update: function(){

  }
};