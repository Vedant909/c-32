const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg,response ;

var sunrise1,sunrise2,sunrise3,sunrise4,sunrise5,sunrise6,sunrise7,sunrise8,sunrise9,sunrise10,sunrise11,sunrise12;


function preload() {
    // create getBackgroundImg( ) here

    sunrise1 = loadImage("sunrise1.png");

    sunrise2 = loadImage("sunrise2.png");

    sunrise3 = loadImage("sunrise3.png");

    sunrise4 = loadImage("sunrise4.png");

    sunrise5 = loadImage("sunrise5.png");

    sunrise6 = loadImage("sunrise6.png");

    sunrise7 = loadImage("sunrise7.png");

    sunrise8 = loadImage("sunrise8.png");

    sunrise9 = loadImage("sunrise9.png");

    sunrise10 = loadImage("sunrise10.png");

    sunrise11 = loadImage("sunrise11.png");

    sunrise12 = loadImage("sunrise12.png");

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    
 

    //change the data in JSON format
   
    var responseJson = await response.json();

    var datetime = responseJson.datetime;

    // write code slice the datetime

    hour = datetime.slice(11,13);


    // add conditions to change the background images from sunrise to sunset

    if(hour>=04 && hour<=06){
       bg = "sunrise1.png";
    }else if (hour>=06 && hour<=08 ){
        bg = "sunrise2";
    }else if (hour>=08 && hour<=10 ){
        bg = "sunrise3";
    }else if (hour>=10 && hour<=12 ){
        bg = "sunrise4";
    }else if (hour>=12 && hour<=14 ){
        bg = "sunrise5";
    }else if (hour>=14 && hour<=16 ){
        bg = "sunrise6";
    }else if (hour>=16 && hour<=18 ){
        bg = "sunrise7";
    }else if (hour>=18 && hour<=20 ){
        bg = "sunrise8";
    }else if (hour>=20 && hour<=22 ){
        bg = "sunrise9";
    }else if (hour>=23 && hour==0){
        bg = "sunrise10";
    }else if (hour==0 && hour<=03){
        bg = "sunrise11";
    }else{
        bg = "sunrise12";
    }




    //load the image in backgroundImg variable here

  

}
