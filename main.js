Cry_Baby_Song = "";
Bella_Ciao = "";

function preload(){
    Cry_Baby_Song = loadSound("Tokyo Revengers Opening (Full) -Cry Baby- Lyrics.mp3")
    Bella_Ciao = loadSound("La Casa De Papel - Bella Ciao [Lyrics] (Money Heist).mp3")
}

function setup(){
    canvas = createCanvas(500, 400);
    canvas.center();
    Video = createCapture(VIDEO);
    Video.hide();
} 

function draw(){
    image(Video, 0, 0, 600, 500);
    fill("#0000FF");
    stroke("#000000");
}