AG.Map = function () {};
  
var helper = {


};

//player object to help manage player stuff
var playerStuff = {
  speed: 500,
  scale: 0.2,
  //called when WASD to move sprite
  move: function (key, direction) {
    //directions: 1 = up,   2 = left,   3 = down,   4 = right
    if (direction == 1){
      //move up
      playerStuff.player.body.velocity.y = playerStuff.speed * - 1;
      playerStuff.player.body.velocity.x = 0;
      //change image to face direction of movement
      playerStuff.player.loadTexture("robBackIMG");
      playerStuff.player.scale.x = playerStuff.scale;
    } else if (direction == 2) {
      //move left
      playerStuff.player.body.velocity.x = playerStuff.speed * - 1;
      playerStuff.player.body.velocity.y = 0;
      //change image to face direction of movement
      playerStuff.player.loadTexture("robSideIMG");
      playerStuff.player.scale.x = - playerStuff.scale;
    } else if (direction == 3) {
      //move down
      playerStuff.player.body.velocity.y = playerStuff.speed;
      playerStuff.player.body.velocity.x = 0;
      //change image to face direction of movement
      playerStuff.player.loadTexture("robFrontIMG");
      playerStuff.player.scale.x = playerStuff.scale;
    } else {
      //move right
      playerStuff.player.body.velocity.x = playerStuff.speed;
      playerStuff.player.body.velocity.y = 0;
      //change image to face direction of movement
      playerStuff.player.loadTexture("robSideIMG");
      playerStuff.player.scale.x = playerStuff.scale;
    } //else 
  } //move function
}; //playerStuff Object

//map object to help manage map stuff
var mapStuff = {
  mapScale: 1,
  map: null, 
  
  genericBuidlingArray: [],
  
  //create generric buildings
  createGenericBuildings: function () {
    for (var i = 0; i < 5; i ++){
      var genericBuidling = game.add.sprite(
        mapStuff.getGenericBuildingStuff(1, 0),
        mapStuff.getGenericBuildingStuff(2, 0),
        "genericBuildingIMG");
      genericBuidling.scale.x = mapStuff.getGenericBuildingStuff(3, 0);
      genericBuidling.scale.y = mapStuff.getGenericBuildingStuff(4, 0);
      
      mapStuff.genericBuidlingArray.push(genericBuidling)
    } //for 
  }, //function create generic buidlings
  
  //hold all coordinates for generic buildings
  genericBuildingStuff: {
    coordsX: [130],
    coordsY: [200],
    scaleX: [0.5],
    scaleY: [0.5]
  },  //object genericBuildingCoords
  
  //return coordinates of all generic buildings
  getGenericBuildingStuff: function (numXY, numToSet) {
    if (numXY == 1){
      //return x stuff
      return mapStuff.genericBuildingStuff.coordsX[numToSet];
    } else if (numXY == 2){
      return mapStuff.genericBuildingStuff.coordsY[numToSet];
    } else if (numXY == 3){
      //return scale stuff
      return mapStuff.genericBuildingStuff.scaleX[numToSet];
    } else if (numXY == 4){
      return mapStuff.genericBuildingStuff.scaleY[numToSet]; 
    } //else if
  } //function getGenericBuildingCoords 
} //mapStuff Object

AG.Map.prototype = {
  preload: function () {
    game.load.image("robFrontIMG", "Assets/Sprites/robEagle.png")
    game.load.image("robSideIMG", "Assets/Sprites/robSide.png")
    game.load.image("robBackIMG", "Assets/Sprites/robBack.png")
    game.load.image("mapIMG", "Assets/Sprites/map.png")
    game.load.image("genericBuildingIMG", "Assets/Sprites/genericBuilding.png")
    
  },
  
  create: function(){
    console.log('You are in the Map state');
    game.stage.backgroundColor = '#0000FF';
    
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    game.world.setBounds(0, 0, 2048, 2048);
    
    mapStuff.map = game.add.sprite (0, 0, "mapIMG");
    mapStuff.map.scale.x = mapStuff.mapScale;
    mapStuff.map.scale.y = mapStuff.mapScale;
     
    playerStuff.player = game.add.sprite (game.camera.width/2, game.camera.height/2, "robFrontIMG");
    playerStuff.player.scale.x = playerStuff.scale;
    playerStuff.player.scale.y = playerStuff.scale;
    playerStuff.player.anchor.x = 0.5;  
    playerStuff.player.anchor.y = 0.5;
    game.physics.enable(playerStuff.player);
    playerStuff.player.body.collideWorldBounds = true;
    
    game.camera.follow(playerStuff.player)
    game.camera.deadzone = new Phaser.Rectangle(game.camera.width/2, game.camera.height/2, 150, 150)
    
    //create generic buidlings
    mapStuff.createGenericBuildings();
  },
  update: function(){
    //WASD keys to do stuff
    game.input.keyboard.addKey(Phaser.Keyboard.W).onDown.add(playerStuff.move, null, null, 1);
    game.input.keyboard.addKey(Phaser.Keyboard.A).onDown.add(playerStuff.move, null, null, 2);
    game.input.keyboard.addKey(Phaser.Keyboard.S).onDown.add(playerStuff.move, null, null, 3);
    game.input.keyboard.addKey(Phaser.Keyboard.D).onDown.add(playerStuff.move, null, null, 4);
    
    //if no buttons are pressed, dont move
    if (!game.input.keyboard.isDown(Phaser.Keyboard.W) && 
        !game.input.keyboard.isDown(Phaser.Keyboard.A) &&
        !game.input.keyboard.isDown(Phaser.Keyboard.S) && 
        !game.input.keyboard.isDown(Phaser.Keyboard.D)) {
      playerStuff.player.body.velocity.x = 0;
      playerStuff.player.body.velocity.y = 0;
    } //if buttons not pressed
  } //function update
};