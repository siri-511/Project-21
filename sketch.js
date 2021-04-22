var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,590,180,20);
    block1.shapeColor = "blue";

    block2 = createSprite(300,590,180,20);
    block2.shapeColor = "green";

    block3 = createSprite(500,590,180,20);
    block3.shapeColor = "yellow";

    block4 = createSprite(700,590,180,20);
    block4.shapeColor = "red";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX = 3;
    ball.velocityY = 3;
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }

    if(block2.isTouching(ball)&& ball.bounceOff(block2)){
        ball.shapeColor = "green";
        music.play();
    }

   if (block3.isTouching(ball)&& ball.bounceOff(block3)){
       ball.shapeColor = "yellow";
       music.play();
   }

   if (block4.isTouching(ball)&& ball.bounceOff(block4)){
       ball.shapeColor = "red";
       music.play();
   }

    drawSprites();
}
