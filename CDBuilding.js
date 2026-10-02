//1* code written by myself (start)
function CDBuilding()
{
	this.name = "CDBuilding";
	this.x = windowWidth / 2;
	this.y = windowHeight / 1.5;
//	this.amplitude = amplitude;

this.draw = function()
{
  background(79);  // Clear the background each frame
  push();
  var spectrum = fourier.analyze();
  var level = amplitude.getLevel();
  var ellipse_Size = map(level, 0, 1, 130, 200);
  var arcBounce = map(level, 0, 1, 0, 20);

  // Drawing the semi circled disks 
  fill(15);
  arc(this.x, this.y, 420, 380, 0, PI);
  fill(17);
  arc(this.x, this.y, 400 + arcBounce, 360 + arcBounce, 0, PI);
  fill(20);
  arc(this.x, this.y, 380 + arcBounce, 340 + arcBounce, 0, PI);
  fill(18);
  arc(this.x, this.y, 360 + arcBounce, 320 + arcBounce, 0, PI);
  fill(16.5);
  arc(this.x, this.y, 340 + arcBounce, 300 + arcBounce, 0, PI);
  fill(18);
  arc(this.x, this.y, 320 + arcBounce, 280 + arcBounce, 0, PI);
  fill(22);
  arc(this.x, this.y, 300 + arcBounce, 260 + arcBounce, 0, PI);
  fill(20);
  arc(this.x, this.y, 280 + arcBounce, 240 + arcBounce, 0, PI);
  fill(18);
  arc(this.x, this.y, 260 + arcBounce, 220 + arcBounce, 0, PI);
  fill(16);
  arc(this.x, this.y, 240 + arcBounce, 200 + arcBounce, 0, PI);
  fill(19);
  arc(this.x, this.y, 220 + arcBounce, 180 + arcBounce, 0, PI);
  fill(21);
  arc(this.x, this.y, 200 + arcBounce, 160 + arcBounce, 0, PI);
  fill(19);
  arc(this.x, this.y, 240 + arcBounce, 200 + arcBounce, 0, PI);
  fill(17);
  arc(this.x, this.y, 220 + arcBounce, 180 + arcBounce, 0, PI);
  fill(18);
  arc(this.x, this.y, 200 + arcBounce, 160 + arcBounce, 0, PI);
  fill(16);
  arc(this.x, this.y, 180 + arcBounce, 140 + arcBounce, 0, PI);
  fill(19);
  arc(this.x, this.y, 160 + arcBounce, 120 + arcBounce, 0, PI);
  fill(20);
  arc(this.x, this.y, 140 + arcBounce, 100 + arcBounce, 0, PI);

  stroke(10);
  strokeWeight(2);
// push();
  // Drawing the buildings using the spectrum values
  for (let i = 0; i < 19; i++) 
  {
	var spectrumValue = spectrum[i * 10];
	var h = map(spectrumValue, 0, 255, 50, 500); //mapping the buldings 
	rect(this.x - 209 + i * 22, (this.y + 40) - h, 21, h - 40);
  }
//1* code witten by myself(end)
  
//code written by myself but a bug occured so i corrected it with teacher assistance (start)
      // Windows
  noStroke();
  fill(79); 
  for (var i = -204; i <= 196; i += 26)
  {
	var spectrumValue = spectrum[Math.floor((i + 204) / 26) * 10]; // adjusted index for simplicity
	var window_Y = map(spectrumValue, 0, 255, this.y - 120, this.y - 15); // Mapped spectrum value to y position to move up and down
	rect(this.x + i, window_Y, 7,8); 
  }
//code written by myself but a bug occured so i corrected it with teacher assistance (end)
  
//2* code witten by myself(start)
  // Red ellipse
  stroke(5);
  fill(160, 3, 3);
  ellipse(this.x , this.y, ellipse_Size, ellipse_Size * 0.72);

  // White ellipse inside the red one
  stroke(15);
  fill(255);
  ellipse(this.x, this.y, 10);

  pop();
//2* code witten by myself(end)
}
}
  