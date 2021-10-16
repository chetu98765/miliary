var thickness,
var wall; 
var bullet,speed,weight;

function setup() {
  createCanvas(900,400
    
    );
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);
 

   
bullet=createSprite(55,200,50,50);

bullet.velocityX=speed 
bullet.shapeColor="red" 
wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor="yellow"

}

function draw() {
  background("orange")
  
  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
bullet.velocityX=0
var deformation=0.5*speed*weight*speed/22500

if(deformation>10){
  bullet.shapeColor="black"
}

if(deformation<10){
  bullet.shapeColor="yellow"
}


  


  drawSprites();
}