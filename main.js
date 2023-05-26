x = 0;
y = 0;
draw_apple = "";
toNumber = "";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "System is Listening. Please Speak ";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    toNumber = Number(content);
    if (Number.isInteger(toNumber)) {
        document.getElementById("status").innerHTML = "The speech has been recognised as an integer: " + content;
        document.getElementById("status").innerHTML = "Started Drawing Apples";
        draw_rect = "set";
    } else {
        document.getElementById("status").innerHTML = "The speech has not been recognised as an integer: " + content;
    }
}

function setup() {
    canvas = createCanvas(900, 600);
}

function draw() {
    if (draw_apple == "set") {
        Image(50, 50, th.jpeg)
        document.getElementById("status").innerHTML = "Apples Is Drawn";
        draw_apple = "";
    }
}