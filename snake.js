var cvs=document.getElementById("canvas");
var ctx=cvs.getContext("2d");
var snakeW = 10;
var snakeH = 10;


var dir="right";
function drawSnake(x,y){
ctx.fillStyle="green";
ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH);
ctx.fillStyle="black";
ctx.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH);
}



//create snake
var len = 4;
snake = [];
for(var i=len-1;i>=0;i--){
    snake.push({
        x:i,
        y:0
    })
 }
 //control Dir
 document.addEventListener("keydown",dirControl)
 function dirControl(e){
   if(e.keyCode==37 && dir!="right"||touches.length>0){
       dir="left";
       touches = [];
   }else if(e.keyCode==38 && dir!="down"||touches.length>0){
    dir="up";
    touches = [];
   }else if(e.keyCode==39 && dir!="left"||touches.length>0){
    dir="right";
    touches = [];
   }else if(e.keyCode==40 && dir!="up"||touches.length>0){
    dir="down";
    touches = [];
   }
 }
  //create food
  var food={
      x:Math.round(Math.random()*(cvs.width/snakeW-5)+1),
      y:Math.round(Math.random()*(cvs.height/snakeH-5)+1)
  }
  var enemy={
    x:Math.round(Math.random()*(cvs.width/snakeW-5)+1),
    y:Math.round(Math.random()*(cvs.height/snakeH-5)+1)
}
var enemy1={
  x:Math.round(Math.random()*(cvs.width/snakeW-5)+1),
  y:Math.round(Math.random()*(cvs.height/snakeH-5)+1)
}
var enemy2={
  x:Math.round(Math.random()*(cvs.width/snakeW-5)+1),
  y:Math.round(Math.random()*(cvs.height/snakeH-5)+1)
}
var enemy3={
  x:Math.round(Math.random()*(cvs.width/snakeW-5)+1),
  y:Math.round(Math.random()*(cvs.height/snakeH-5)+1)
}
var enemy4={
  x:Math.round(Math.random()*(cvs.width/snakeW-5)+1),
  y:Math.round(Math.random()*(cvs.height/snakeH-5)+1)
}

var enemy5={
  x:Math.round(Math.random()*(cvs.width/snakeW-5)+1),
  y:Math.round(Math.random()*(cvs.height/snakeH-5)+1)
}
var enemy6={
  x:Math.round(Math.random()*(cvs.width/snakeW-5)+1),
  y:Math.round(Math.random()*(cvs.height/snakeH-5)+1)
}
  //draw food
  function drawFood(x,y){
    ctx.fillStyle="red";
    ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH);
    ctx.fillStyle="black";
    ctx.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH);
  }
  function drawEnemy(x,y){
    ctx.fillStyle="blue";
    ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH);
    ctx.fillStyle="black";
    ctx.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH);
    }
    function drawEnemy1(x,y){
      ctx.fillStyle="gold";
      ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH);
      ctx.fillStyle="black";
      ctx.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH);
      }
      function drawEnemy2(x,y){
        ctx.fillStyle="purple";
        ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH);
        ctx.fillStyle="black";
        ctx.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH);
        }
        function drawEnemy3(x,y){
          ctx.fillStyle="aqua";
          ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH);
          ctx.fillStyle="black";
          ctx.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH);
          }
          function drawEnemy4(x,y){
            ctx.fillStyle="lime";
            ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH);
            ctx.fillStyle="black";
            ctx.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH);
            }
            
            function drawEnemy5(x,y){
            ctx.fillStyle="orange";
            ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH);
            ctx.fillStyle="black";
            ctx.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH);
            }
              function drawEnemy6(x,y){
              ctx.fillStyle="pink";
              ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH);
              ctx.fillStyle="black";
              ctx.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH);
              }
 //draw function
 function draw() {
     ctx.clearRect(0,0,cvs.width,cvs.height);
  for(var i=0;i<snake.length;i++){
    var X = snake[i].x;
    var Y = snake[i].y;
    drawSnake(X,Y)
  }
  drawFood(food.x,food.y);
 //snake head
   var snakeX = snake[0].x
   var snakeY = snake[0].y
   if(snakeX<0||snakeY<0||snakeX>=cvs.width/snakeW||snakeY>=cvs.height/snakeH){
    alert("Game Over");
    alert("Please Restart The Game");
   }

   if(snakeX==enemy.x && snakeY==enemy.y){
    alert("Game Over");
    alert("Please Restart The Game");
   }

   if(snakeX==enemy1.x && snakeY==enemy1.y){
    alert("Game Over");
    alert("Please Restart The Game");
   }

   if(snakeX==enemy2.x && snakeY==enemy2.y){
    alert("Game Over");
    alert("Please Restart The Game");
   }

   if(snakeX==enemy3.x && snakeY==enemy3.y){
    alert("Game Over");
    alert("Please Restart The Game");
   }

   if(snakeX==enemy4.x && snakeY==enemy4.y){
    alert("Game Over");
    alert("Please Restart The Game");
   }

   if(snakeX==enemy5.x && snakeY==enemy5.y){
    alert("Game Over");
    alert("Please Restart The Game");
   }
   
   if(snakeX==enemy6.x && snakeY==enemy6.y){
    alert("Game Over");
    alert("Please Restart The Game");
   }


  
   if(dir=="right"){snakeX++}
   else if(dir=="left"){snakeX--}
   else if(dir=="up"){snakeY--}
   else if(dir=="down"){snakeY++}

   if(snakeX==food.x && snakeY==food.y){
    food={
        x:Math.round(Math.random()*(cvs.width/snakeW-5)+1),
        y:Math.round(Math.random()*(cvs.height/snakeH-5)+1)
    }
 var newHead = {
    x: snakeX,
    y: snakeY
}
   }else{
   snake.pop();
    var newHead = {
      x: snakeX,
      y: snakeY
     }
   }
   snake.unshift(newHead);

  } //end draw function

setInterval(draw,60);