var drops=[];
var maxDrops=100;
const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
var engine;
var world;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(400,1200);
    engine=Engine.create();
    world=engine.world;
    for(var i=0; i<maxDrops ; i++){
        drops.push(new CreateDrop(random(0,400),random(0,400)))
}
    
}

function draw(){
    background("black")
    Engine.update(engine);
    for(var i=0; i<maxDrops ; i++){
        drops[i].display();
        drops[i].update();
}

    
    
}   

