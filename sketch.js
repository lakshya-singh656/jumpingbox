var canvas,surface1,surface2,surface3,surface4,box;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(870,600);

    //create 4 different surfaces
    surface1=createSprite(120,580,200,30)
    surface1.shapeColor=('blue')
    surface2=createSprite(330,580,200,30)
    surface2.shapeColor=('yellow')
    surface3=createSprite(540,580,200,30)
    surface3.shapeColor=('green')
    surface4=createSprite(750,580,200,30)
    surface4.shapeColor=('red')
   



    //create box sprite and give velocity
    box=createSprite(440,200,30,30)
    box.velocityX=3;
    box.velocityY=3;
    


}

function draw() {
    background("cyan");
    //create edgeSprite
    if(box.x<0){
        //music.stop()
          box.velocityX=3
      }else if(box.x>870){
        //music.stop()
          box.velocityX=-3
      }

      if (box.y<0){
        //music.stop()
        box.velocityY=3
      }

      if(box.isTouching(surface1)){
        music.play()
        box.shapeColor="blue";
        box.bounceOff(surface1)
        
      }
      
      else if(box.isTouching(surface2)){
        music.stop()
        box.shapeColor="yellow";
        box.bounceOff(surface2)
       
      }
        
      else if(box.isTouching(surface3)){
        music.play()
        box.shapeColor="green";
        box.bounceOff(surface3)
        
      }
      
      else if(box.isTouching(surface4)){
        music.play()
        box.shapeColor="red";
        box.bounceOff(surface4)
      }
    




    //add condition to check if box touching surface and make it box

    drawSprites();
}
