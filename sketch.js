var count = 0;
function preload(){
	
}

function setup() {
  createCanvas(200,100)
}


function draw() {
 
  rectMode(CENTER);
  //background(0);
  background(0)
  drawSprites();
  fill("gold")
  textSize(35)
  text("Score : "+count,10,90);
  count = Math.round(World.frameCount/50);
 
  if(count>3){
    text("Level 2",10,40);
    drawEnemy(enemy.x,enemy.y);
    drawEnemy1(enemy1.x,enemy1.y);
    drawEnemy2(enemy2.x,enemy2.y);
    drawEnemy3(enemy3.x,enemy3.y);
    drawEnemy4(enemy4.x,enemy4.y);
    drawEnemy5(enemy5.x,enemy5.y);
    drawEnemy6(enemy6.x,enemy6.y);
    
   }
  
 
 
}



