let lexicon;
let bg;
function setup() {
    // var myCanvas = document.getElementsByClassName('fortunePaper');
    // createCanvas(myCanvas);
    //myCanvas.parent("fortune_paper");

    bg = loadImage("https://static.wixstatic.com/media/f45a57_cc628616a0db43cdab3d02cb0a0a8eef~mv2.jpeg");
    createCanvas(400, 400);
    background(bg);
    fill(0);
    noStroke();
    textSize(24);
    textAlign(CENTER, CENTER);
    text("click for fortune", width/2, height/2);
}
function draw() {
    //background(bg);
}
function mouseClicked() {
  background(bg);
  let firstLine  = "the " + 
    RiTa.randomWord({pos: "jj", numSyllables: 2}) + 
    " " +
    RiTa.randomWord({pos: "nn", numSyllables: 2});
  let secondLine = RiTa.randomWord(
        {pos: "vbg", numSyllables: 2}) +
    " in the " +
    RiTa.randomWord({pos: "jj", numSyllables: 2}) + 
    " " +
    RiTa.randomWord({pos: "nn", numSyllables: 1});
  let thirdLine = "I " +
    RiTa.randomWord({pos: "vbd", numSyllables: 2}) + 
    " " + 
    RiTa.randomWord({pos: "rb", numSyllables: 2});
  text(firstLine, width/2, 150);
  text(secondLine, width/2, 200);
  text(thirdLine, width/2, 250);
}