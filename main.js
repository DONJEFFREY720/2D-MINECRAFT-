canvas = new fabric.Canvas("myCanvas")

block_width =30;
block_height=30;

player_x =10
player_y =10

player_object=""
block_img_object=""

function player_uepdate(){
     fabric.Image.fromURL("player.png",function (Img){
          player_object =Img;

          player_object.scaleToWidth(150);
          player_object.scaleToHeight(140);
          player_object.set({
               top:player_y,
               left:player_x
          });
          canvas.add(player_object);
     });
}

function new_image(get_image){
     fabric.Image.fromURL(get_image,function (Img){
          block_img_object =Img;

          block_img_object.scaleToWidth(block_width);
          block_img_object.scaleToHeight(block_height);
          block_img_object.set({
               top:player_y,
               left:player_x
          });
          canvas.add(block_img_object);
     });
}

window.addEventListener("keydown",mykeydown)
function mykeydown(e) {
     keyPressed=e.keyCode
  console.log(keyPressed)
  
  if(e.shiftKey == true && keyPressed=='80'){

block_width = block_width+10
block_height = block_height+10
 document.getElementById("block_width").innerHTML= "current Width= "+block_width;
 document.getElementById("block_height").innerHTML= "current Height= "+block_height  ;
  }

  if(e.shiftKey == true && keyPressed=='77'){

     block_width = block_width-10
     block_height = block_height-10
     document.getElementById("block_height").innerHTML= "current Height= "+block_height  ;
     document.getElementById("block_width").innerHTML= "current Width= "+block_width;
       }
  
     if(keyPressed == '38')
     {
     up();
       console.log("up");
     }

     if(keyPressed == '40')
     {
     down();
       console.log("down");
     }

     if(keyPressed == '39')
     {
     right();
       console.log("right");
     }

     if(keyPressed == '37')
     {
     left();
       console.log("left");
     }

     if( keyPressed=='84'){
          new_image("trunk.jpg")
          console.log("t")
     }

     if( keyPressed=='68'){
          new_image("dark_green.png")
          console.log("d")
     }

     if( keyPressed=='76'){
          new_image("light_green.png")
          console.log("l")
     }

     if( keyPressed=='71'){
          new_image("ground.png")
          console.log("g")
     }

     if( keyPressed=='87'){
          new_image("wall.jpg")
          console.log("w")
     }

     if( keyPressed=='89'){
          new_image("yellow_wall.png")
          console.log("y")
     }

     if( keyPressed=='82'){
          new_image("roof.jpg")
          console.log("r")
     }

     if( keyPressed=='67'){
          new_image("cloud.jpg")
          console.log("c")
     }

     if( keyPressed=='85'){
          new_image("unique.png")
          console.log("u")
     }
       
}

function up(){
     if(player_y>=0) {
          player_y=player_y-block_height;
          console.log(player_y)
          canvas.remove(player_object)
          player_uepdate()
     }
}

function down(){
     if(player_y<=600) {
          player_y=player_y+block_height;
          console.log(player_y)
          canvas.remove(player_object)
          player_uepdate()
     }
}

function left(){
     if(player_x>=0) {
          player_x=player_x-block_width;
          console.log(player_x)
          canvas.remove(player_object)
          player_uepdate()
     }
}

function right(){
     if(player_x<=1000) {
          player_x=player_x+block_width;
          console.log(player_x)
          canvas.remove(player_object)
          player_uepdate()
     }
}