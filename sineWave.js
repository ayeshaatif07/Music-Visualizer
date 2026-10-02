//1* code written by myself(start)
function sineWave(){
	this.name = "sineWave";
	this.angles = [];
	this.angleV = []; //angle velocity
	this.r = 4;
	
	var total = floor(height / 8);
	
	for (var i = 0; i < total + 2; i++) 
	{
		this.angles[i] = map(i, 0, total, 0, TWO_PI);
		this.angleV[i] = 0.01 + i / 100;
	}
	
this.draw = function()
{
	push();
	translate(width / 2, height / 2);
	noFill();
	stroke(random(252, 238, 33));

	this.recursiveWave(1, 1, 50);
	pop();

}
//1* code written by myself(end)

// code written by myself but I took a bit of help from my teacher assistant(start)
this.recursiveWave = function(c, mult, color)
{

	stroke(0,color,0);
	var spectrum = fourier.analyze();  
	
	
	if(c < 5 && mult < 5) 
	{
		beginShape();
		for (var i = 0; i < this.angles.length; i++)
		{
			var freq_Index = floor(map(i, 0, this.angles.length, 0, spectrum.length));
			var amplitude = spectrum[freq_Index];
			var mod = map(amplitude, 0, 150, 0.5, 1.5);

			this.angles[i] += this.angleV[i] * mod;
			var a = -300 / mult; //calculating the minimum y coordinate based on the multiplier
			var b = 300 / mult; //calculating the maximum y coordinate based on the multiplier
			var y = map(sin(this.angles[i]), -1, 1, a, b);
			var w = map(i, 0, this.angles.length / c, -300, 500);
			strokeWeight(2);
			vertex(y, w);
		}
		endShape();
    
    
		this.recursiveWave(c + 1, mult + 1, color + 20); //recursively calling the method with updated parameters
// code written by myself but I took a bit of help from my teacher assistant(end)
	}
	
}
	}
