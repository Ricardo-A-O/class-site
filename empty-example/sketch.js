
function preload() {
  // Load a sound file
  song = loadSound('assets/Safaera.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Loop the sound forever
  // (well, at least until stop() is called)
  song.loop();
  angleMode(DEGREES)
}

function draw() {
  background(245, 235, 7);

  // Set the volume to a range between 0 and 1.0
  let volume = map(mouseX, 0, width, 0, 1);
  volume = constrain(volume, 0, .2);
  song.amp(volume);

  // Set the rate to a range between 0.1 and 4
  // Changing the rate alters the pitch
  let speed = map(mouseY, 0.1, height, 0, 2);
  speed = constrain(speed, 0.01, 4);
  song.rate(speed);

  // Draw some circles to show what is going on
  translate(mouseX,mouseY)
  stroke(255);
  fill(255, 255);
  ellipse(0, 0, 48, mouseY);
  stroke(255);
  fill(255, 255);
  ellipse(0, 0, mouseX, 48);
  stroke(255);
  fill(255, 255);
  rotate(45)
  ellipse(0, 0, mouseX, 48);
  stroke(255);
  fill(255, 255);
  rotate(90)
  ellipse(0, 0, mouseX, 48);
  stroke(255);
  fill(255, 255);
  ellipse(0, 0, mouseX, 48);
  stroke(255);
  fill(238, 133, 24);
  ellipse(0, 0, 48, 48);


}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
