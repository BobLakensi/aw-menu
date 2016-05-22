AG.Menu = function(){};

//buttonHelper object to helper manage button stuff
var buttonHelper = {
  durationOfAnim: 700,
  easeAnim: "Elastic",
  delayAim: 100,
  
  //what happens when play button is clicked
  startGame: function (){
    changeState("Cutscene");
  }
};

AG.Menu.prototype = {
  preload: function (){
    game.load.spritesheet("creditsButtonTemp", "Assets/Sprites/creditsButtonTemp.png", 314, 124);
    game.load.spritesheet("playButtonTemp", "Assets/Sprites/playButtonTemp.png", 314, 125 );
    game.load.spritesheet("settingsButtonTemp", "Assets/Sprites/settingsButtonTemp.png", 314, 127);

  },
	
  create: function(){
    console.log('You are in the Menu state');
    game.stage.backgroundColor = '#fff';
    
    //create buttons
    buttonHelper.playButton = game.add.button(game.world.centerX, game.world.height + 50, "playButtonTemp", buttonHelper.startGame, null, 1, 2, 3, 1);
    buttonHelper.settingsButton = game.add.button(game.world.centerX, game.world.height + 50, "settingsButtonTemp", null, null, 1, 2, 3, 1);
    buttonHelper.creditsButton = game.add.button(game.world.centerX, game.world.height + 50, "creditsButtonTemp", null, null, 1, 2, 3, 1);

  
    //tween buttons
    game.add.tween(buttonHelper.playButton).to( { y: game.world.centerY/3 }, buttonHelper.durationOfAnim, buttonHelper.easeAnim, true, buttonHelper.delayAim);
    game.add.tween(buttonHelper.settingsButton).to( { y: game.world.centerY*2/3 }, buttonHelper.durationOfAnim, buttonHelper.easeAnim, true, buttonHelper.delayAim*2);
    game.add.tween(buttonHelper.creditsButton).to( { y: game.world.centerY }, buttonHelper.durationOfAnim, buttonHelper.easeAnim, true, buttonHelper.delayAim*3);

  },

  update: function(){

  }
};