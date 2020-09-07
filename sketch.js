var bullet,wall;
var speed,weight;
var bullet,thickness;

function setup() {
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(50,200,50,50);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX = speed;
  thickness = random(22,83);


  
    

  
  
  createCanvas(1600,400);
  
}

function draw() {
  background (0); 
    if (hascollided(bullet,wall))
    {
      bullet.velocityX = 0;
      var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)

      if(damage>10)
      {
          wall.shapeColor = color(255,0,0);
      }

      if (damage<10)
      {
        wall.shapeColor = color (0,255,0);
      }
    }
    
    
  
   
  drawSprites();
}

function hascollided (bullet,wall)
{
  bulletRightEdge = bullet.x + bullet.width
  wallLeftEdge = wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;

}