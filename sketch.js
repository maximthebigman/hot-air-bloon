var balloon,balloonImage1,balloonImage2;
var database;
var height;

function preload(){
   bg =loadImage("Images/cityImage.png");
   balloonImage1=loadAnimation("Images/HotAirBallon01.png");
   balloonImage2=loadAnimation("Images/HotAirBallon01.png","Images/HotAirBallon01.png",
   "Images/HotAirBallon01.png","Images/HotAirBallon02.png","Images/HotAirBallon02.png",
   "Images/HotAirBallon02.png","Images/HotAirBallon03.png","Images/HotAirBallon03.png","Images/HotAirBallon03.png");
  }
  
  function setup(){
      createCanvas(500,500);
      database = firebase.database();
      console.log(database)
  
      ball = createSprite(250,250,10,10);
      
  
      var ballposition = database.ref("ball/position")
      ballposition.on("value",readPosition,showError)
  }
  
  function draw(){
      background("white");
      if(position!==undefined){
  
      
      if(keyDown(LEFT_ARROW)){
          writePosition(-1,0);
      }
      else if(keyDown(RIGHT_ARROW)){
          writePosition(1,0);
      }
      else if(keyDown(UP_ARROW)){
          writePosition(0,-1);
      }
      else if(keyDown(DOWN_ARROW)){
          writePosition(0,+1);
      }
      drawSprites();
  }
  }
  
  function writePosition(x,y){
  database.ref("ball/position").set({
      'x':position.x+x,
      'y':position.y+y,
  })
  }
  
  function readPosition(data){
      position = data.val();
      ball.x = position.x
      ball.y = position.y
  }
  
  function showError(){
      console.log("Error")
  }