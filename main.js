function preload(){

}
function  setup(){
    canvas=createCanvas(640,480);
    canvas.position(210,250);
    video=createCapture(VIDEO);
   video.hide();
}
function draw(){
    image(video,0,0,640,440);
   fill(255,0,0); 
   circle(50,50,50);
   circle(50,400,50);
   circle(600,50,50);
   circle(600,400,50);
   fill(0,255,0);
   rect(40,40,570,20)
   rect(40,390,570,20)
   rect(40,40.0,50)
   rect(600,40,0,50)
}
function takeSnapshot(){
    save("Foto Com Filtro.png")
}