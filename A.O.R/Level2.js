var ramlal,speed=5,platform,f=0.3,jumpCount=0,end=0;
var sun,sun1,n,knife;
var a,b,g,k;



function preload(){
}
function setup(){
  //knife
 
  
  createCanvas(1500,600);
  // falling fire balls
  sun =new Group();
  knife= createSprite(1300,height - 60,50,10);

  knife.addAnimation("img/chaku.png");
  
var x=2,y=5;
for(var i=0;i<3;i++)
  
{ 
      sun1=createSprite(x*100,x,-100,-200);
      sun1.addAnimation("falling","img/sun1.png","img/sun2.png");
      sun1.velocity.y=y;
      sun1.setCollider("circle",0,0,45);
      sun.add(sun1);
      x=x+1;
      y=y+4;

 }
 // platrform
      ramlal=createSprite(20,450);
      platform=createSprite(600,580);
   

      platform.addAnimation("ground","chart/111.png");
      ramlal.addAnimation("stop","chracter/frame-1.png");                                                                         
      ramlal.addAnimation("walk","chracter/walk001.png","chracter/walk006.png");  
      ramlal.velocity.x=0;
      ramlal.velocity.y=0;
      platform.setCollider("rectangle",0,0,15000,60);
      ramlal.setCollider("rectangle",0,0,50,50);



}
function draw()
 {
  if(end==0)
  {
  ramlal.velocity.y+=f;
  
  background(255,0,255);
 

  //ramlal movements
for(var i=0;i<3;i++)
 {
      g=sun[i];
 if(ramlal.collide(g)) 
  {
     ramlal.remove();
    end=1; 
    
    
 }  
  
if(g.position.y>=height-70)
{
      g.velocity.y =g.velocity.y* -1;
  }
else if (g.position.y<=0) {
      g.velocity.y = g.velocity.y* -1;
 
 }

}
 

 if(ramlal.collide(platform))
{
     jumpCount=0;
     ramlal.velocity.y=0;
  } 

 if(keyWentDown("UP_ARROW"))


{
  if(jumpCount<2)
 {
   ramlal.changeAnimation("stop");
  // ramlal.animation.rewind();
  ramlal.velocity.y=-10;

   
   jumpCount+=1;
 }
 }
 

else if(keyDown("RIGHT_ARROW"))
{ 
  ramlal.mirrorX(1);
  ramlal.changeAnimation("walk"); 
 // ramlal.animation.rewind();
  ramlal.velocity.x=speed;


}
else if(keyDown("LEFT_ARROW"))
{ 
  ramlal.mirrorX(-1);
  ramlal.changeAnimation("walk"); 
 // ramlal.animation.rewind();
  ramlal.velocity.x=-speed;

}
else 
{
  ramlal.changeAnimation("stop");
  ramlal.velocity.x=0;
} 
if(ramlal.position.x>=400){
  k=5;
}
if(k==5)
{
  knife.velocity.x -= 0.3;
}
if(ramlal.collide(knife)) {
  ramlal.remove();
  knife.remove();
  end = 2;
}
drawSprites();
drawSprites(sun);
ramlal.velocity.y+=f;


}
else {
  textSize(50);
  text("game over",300,300);
}
//ramlal.velocity.y=f; 
}

