AG.Menu = function(){};

//buttonHelper object to helper manage button stuff
var buttonHelper = {
  durationOfAnim: 700,
  easeAnim: "Elastic",
  delayAim: 100,
  
  //what happens when play button is clicked
  startGame: function (){
    changeState("Map");
  },
  
  createButtons: function () {
    buttonHelper.playButton = game.add.button(game.world.centerX, game.world.height + 50, "playButtonTemp",   buttonHelper.startGame, null, 1, 2, 3, 1);
    buttonHelper.settingsButton = game.add.button(game.world.centerX, game.world.height + 50, "settingsButtonTemp", null, null, 1, 2, 3, 1);
    buttonHelper.creditsButton = game.add.button(game.world.centerX, game.world.height + 50, "creditsButtonTemp", null, null, 1, 2, 3, 1);
  },
  
  fixButtonPos: function () {
    buttonHelper.playButton.x = buttonHelper.playButton.x - buttonHelper.playButton.width/2;
    buttonHelper.settingsButton.x = buttonHelper.settingsButton.x - buttonHelper.settingsButton.width/2;
    buttonHelper.creditsButton.x = buttonHelper.creditsButton.x - buttonHelper.creditsButton.width/2;
  },
  
  tweenButtons: function () {
    game.add.tween(buttonHelper.playButton).to( { y: game.world.centerY/3 }, buttonHelper.durationOfAnim, buttonHelper.easeAnim, true, buttonHelper.delayAim);
    game.add.tween(buttonHelper.settingsButton).to( { y: game.world.centerY*2/3 }, buttonHelper.durationOfAnim, buttonHelper.easeAnim, true, buttonHelper.delayAim*2);
    game.add.tween(buttonHelper.creditsButton).to( { y: game.world.centerY }, buttonHelper.durationOfAnim, buttonHelper.easeAnim, true, buttonHelper.delayAim*3);
  }
};

//object to help with animations
var animHelper = {
  robFront: null
}

AG.Menu.prototype = {
  preload: function (){
    game.load.image("robFrontIMG", "Assets/Sprites/robFront.png")
    
    game.load.spritesheet("creditsButtonTemp", "Assets/Sprites/creditsButtonTemp.png", 314, 124);
    game.load.spritesheet("playButtonTemp", "Assets/Sprites/playButtonTemp.png", 314, 125 );
    game.load.spritesheet("settingsButtonTemp", "Assets/Sprites/settingsButtonTemp.png", 314, 127);

  },
	
  create: function(){
    console.log('You are in the Menu state');
    game.stage.backgroundColor = '#fff';
      
    animHelper.robFront = game.add.sprite(100, 100, "robFrontIMG");
    
    //create buttons
    buttonHelper.createButtons();
    //fix button positions
    buttonHelper.fixButtonPos();
    //tween buttons
    buttonHelper.tweenButtons();


  },

  update: function(){

  }
};