Left_Wrist_X = 0;
Left_Wrist_Y = 0;
Right_Wrist_X = 0;
Right_Wrist_Y = 0;

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
    PoseNetVar = ml5.poseNet(Video, modelLoaded);
} 

function draw(){
    image(Video, 0, 0, 600, 500);
    fill("#0000FF");
    stroke("#000000");
}

function modelLoaded(){
    console.log('PoseNet is Initialised!');
    PoseNetVar.on('pose', PoseResult);
}

function PoseResult(results){
    if (results.length > 0) {
        console.log(results);

        Left_Wrist_X = results[0].pose.leftWrist.x;
        Left_Wrist_Y = results[0].pose.leftWrist.y;
        console.log('X Coordinate of Left Wrist = '+ Left_Wrist_X+', Y Coordinate of Left Wrist = '+Left_Wrist_Y);
        
        Right_Wrist_X = results[0].pose.rightWrist.x;
        Right_Wrist_Y = results[0].pose.rightWrist.y;
        console.log('X Coordinate of Right Wrist = '+Right_Wrist_X+', Y Coordinateof Right Wrist = '+Right_Wrist_Y);
    }
}