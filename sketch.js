//global for the controls and input 
var controls = null;
//store visualisations in a container
var vis = null;
//variable for the p5 sound object
var sound = null;
//variable for p5 fast fourier transform
var fourier;

function preload() {
	sound = loadSound('assets/bumtum.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	//object for controls and inputs
	controls = new ControlsAndInput();

	//instantiate the fft object
	fourier = new p5.FFT();

	amplitude = new p5.Amplitude();

	//create a new visualisation container and add visualisations
	vis = new Visualisations();
	
	//add new objects here..
	//for mids
	vis.add(new CDBuilding());
	vis.add(new sineWave());
	vis.add(new spiralFlower());
	vis.add(new stars());

	//after mids 
    vis.add(new grandPiano());
    vis.add(new mandelbrotSet());
    vis.add(new heartbeatWave());
	vis.add(new circlePacking());	
}

function draw() {
	background(0);
	//draw the selected visualisation
	vis.selectedVisual.draw();
	//draw the controls on top.
	controls.draw();
}

function mouseClicked() {
	controls.mousePressed();
}

function keyPressed() {
	controls.keyPressed(keyCode);
}

//when the window has been resized. Resize canvas to fit 
//if the visualisation needs to be resized call its onResize method
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	if (vis.selectedVisual.hasOwnProperty('onResize')) 
	{
		vis.selectedVisual.onResize();
	}
}
