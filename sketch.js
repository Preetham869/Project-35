var dog, happydogImg, database, foodS;
var dogImg,foodStock;

function preload()
 {

 dogImg = loadImage("images/Dog.png")  
 happydogImg = loadImage("images/happydog.png")

 }

function setup() {
   
  database = firebase.database();

  createCanvas(500, 500);
  
  dog = createSprite(200,200,20,20)
  dog.addImage(dogImg);
  dog.scale = 0.5;

  foodStock = database.ref('Food');
  foodStock.on("value" , readStock);

  }


 function draw() {  

  background(46,139,87)

 if(keyWentDown(UP_ARROW)) {

  writeStock(foodS)
  dog.addImage(happydogImg)

 }


  drawSprites();

  textSize(20);
  fill("red")
  //Stroke();
  text("Note: Press UP_ARROW key to feed Drago Milk!👍 ", 20,20)

 }

  function readStock(data){

  foodS = data.val();

  }

  function writeStock(x){

 if(x <= 0){

 x = 0;

 }else{

 x = x - 1;

 }

  database.ref('/').update({
  
    Food: x

  })

  }

