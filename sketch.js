dog,food,foodCount,database;

function preload()
{
  dogImage = loadImage("dogImg.png");
  dogHappyImage = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(800, 700);
  
  database = firebase.database();
  var foodCount = database.ref("food");
  foodCount.on("value",readStock);

  dog = createSprite(400,400,50,50);
  dog.addImage("dogImg.png",dogImage)
  
}


function draw() {  
  background("yellow");

  if(keyDown("UP_ARROW")){
    writeStock(foodCount);
    dog.addImage("dogImg1.png",dogHappyImage);
  }

  drawSprites();
  

}

function readStock(data){
  foodCount = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x = x-1;
  }

  database.ref('/').update({
    food:x
  })

}


