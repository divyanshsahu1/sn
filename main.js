var canvs =document.getElementById("canvas")
var permission = canvs.getContext("2d")
var snake =[]
snake[0]={x:4*32,y:9*32} 
var groundimg = new Image()
groundimg.src="ground.png"
var direction
var fooimg = new Image()
fooimg.src="food.png"
var score=0
var food ={
    x:Math.round(Math.random()*12+2)*32,
    y:Math.round(Math.random()*11+4)*32
}
document.addEventListener("keydown",direction)
function direction(event){
    if(event.keyCode===37 && direction!="right"){
      direction="left"
    }
    if(event.keyCode===38 && direction!="bottom"){
        direction="up"
      }
      if(event.keyCode===39&& direction!="left"){
        direction="right"
      }
      if(event.keyCode===40&&direction!="up"){
        direction="bottom"
      }

}
function hold(){
    permission.drawImage(groundimg,0,0)
    permission.drawImage(fooimg,food.x,food.y)
for(var i=0; i<snake.length ; i++){
    permission.fillStyle=(i===0?"black":"yellow")
permission.fillRect(snake[i].x,snake[i].y,32,32)
}
permission.fillStyle="white"
permission.font="30px calibri"
permission.fillText(score,2.5*32,1.5*32)


//getting hold old position
var snakex=snake[0].x
var snakey=snake[0].y  
//rrmoving tail

//moving the snake and diffirent direction
if (direction==="left"){
snakex=snakex-32

}
if (direction==="up"){
    snakey=snakey-32
    
    }
if (direction==="right"){
        snakex=snakex+32
        
        }
if (direction==="bottom"){
            snakey=snakey+32
            
            }
var newhead ={x:snakex,y:snakey}


if(snakex==food.x && snakey==food.y){
    food ={
        x:Math.round(Math.random()*17)*32,
        y:Math.round(Math.random()*18)*32
    }
    score=score+1
}else{
    snake.pop()
}

if (collision(newhead,snake) || snakex<32 || snakex>17*32 || snakey<3*32 || snakey>17*32){
    clearInterval(game)
} 
snake.unshift(newhead)   
}
                                                                                                                                                                                                                                                                                                                                   
function collision(head,array){
for (var i=0 ; i<array.length ; i++){
if(head.x ==array[i].x && head.y == array[i].y){
    return true
}
}
return false
}
var game= setInterval(hold,100)