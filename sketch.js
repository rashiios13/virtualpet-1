//Create variables here
var dog, happyDog ;
var database;
var foodS, foodStock;

function preload()
{
  database = firebase.database()
  foodStock = database.ref("food")
  foodStock.on("value",readStock)
  //load images here
  dogimg= loadImage("Dog.png");
  happyDogimg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(300,385)
dog.scale=0.3
  dog.addImage(dogimg)
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDogimg)
  }

  drawSprites();
  //add styles here
  textSize(20)
  fill('red');
  text("number of mlik bottles in the stock are :"+foodS,100,200)
  textSize(15)
  fill('cyan');
  text("*Press the UP_ARROW key to feed the dog milk bottles.",5,50)
}
function readStock(data){

  foodS=data.val();
}
function writeStock(x){

if(x<=0){
  x=0
}else{
  x=x-1
}

  database.ref('/').update({
    food:x
  })
}


