//1* code written by myself(start)
function spiralFlower()
{
	this.name = "spiralFlower";
    this.baseRadius = 40; // base radius for the spiral
	this.roll = random(20, 130);

this.draw = function()
{
push();
		
  var spectrum = fourier.analyze(); // Get the frequency spectrum
  var bass = fourier.getEnergy("bass"); // Get the amplitude of the bass frequencies
  var treble = fourier.getEnergy("treble"); // Get the amplitude of the treble frequencies

  var avg_Amplitude = spectrum.reduce((a, b) => a + b, 0) / spectrum.length;

  var radiusIncrement = map(bass, 0, 255, 50, 100); // Map bass to a range for radius increment
  var currentRadius = this.baseRadius + radiusIncrement;

  var spiralLength = map(avg_Amplitude, 0, 255, 2 * PI, 16 * PI); // Mapping amplitude to spiral length range

  var center_X = windowWidth / 2;
  var center_Y = windowHeight / 2;
  var numFlowers = 50; 
  var angle_Increment = TWO_PI / numFlowers;
  var flowerSpacing = 20; // increase spacing between flowers 
  this.roll = 30;
  rotate(radians(this.roll));
		
  strokeWeight(2);
  stroke(255, 0, 0,0);
  noFill();
  translate(windowWidth / 2, windowHeight / 2);
//1* code written by myself(end)
		
//code written by myself but I took a bit of help from my teacher(start)
  beginShape();

  var flowerCount = 0;
  var angle = 0;

  for (var i = 0; i <= spiralLength; i += PI / 150) 
  {
    var spiral_X = currentRadius * sin(i) + 110;
    var spiral_Y = currentRadius * cos(i) - 400;

	if (flowerCount % flowerSpacing == 0) // ensuring flowerCount is exactly divisible by flowerSpacing!
	{ 
	  this.drawFlower(spiral_X, spiral_Y); // drawing the flower along with spiral rings 
	}
	flowerCount++;

    currentRadius += radiusIncrement / 300; // increase radius here for wider spiral rings!!
  }

  endShape();
//code written by myself but I took a bit of help from my teacher(end)

pop(); 
}
//2* code written by myself(start)
this.drawFlower = function(flower_X, flower_Y) 
{
  stroke(181, 87, 140);
  fill(245, 142, 200);

  ellipse(flower_X, flower_Y, 80, 20);           
  ellipse(flower_X, flower_Y, 20, 80);          
  ellipse(flower_X - 16, flower_Y - 17, 20, 20); 
  ellipse(flower_X + 16, flower_Y - 17, 20, 20); 
  ellipse(flower_X + 16, flower_Y + 16, 20, 20); 
  ellipse(flower_X - 16, flower_Y + 16, 20, 20); 

  fill(252, 186, 109);
  ellipse(flower_X, flower_Y, 30, 30);  
//2* code written by myself(end)
}
}

		
		
