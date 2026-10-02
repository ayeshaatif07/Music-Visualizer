function grandPiano() {
    // Properties
    this.name = "grandPiano"
    this.x = 380;
    this.y = 500;
    // Initialize angle for wiper movement
    this.wiperAngle = 0;

    // Initialize keys (translucent black) states and frequency ranges
    this.keys = [
        { state: false, freqRange: [60, 100] },   
        { state: false, freqRange: [100, 140] },  
        { state: false, freqRange: [140, 180] },  
        { state: false, freqRange: [180, 220] },  
        { state: false, freqRange: [220, 260] },  
        { state: false, freqRange: [260, 300] },  
        { state: false, freqRange: [300, 340] },  
        { state: false, freqRange: [340, 380] },  
        { state: false, freqRange: [380, 420] },  
        { state: false, freqRange: [420, 460] },  
        { state: false, freqRange: [460, 500] },  
        { state: false, freqRange: [500, 540] },  
        { state: false, freqRange: [540, 580] },  
        { state: false, freqRange: [580, 620] },  
        { state: false, freqRange: [620, 660] },  
        { state: false, freqRange: [660, 700] },  
        { state: false, freqRange: [700, 740] },  
        { state: false, freqRange: [740, 780] },  
        { state: false, freqRange: [780, 820] }  
    ];
  
    // Method to draw the grand piano
    this.draw = function() {
        background(100);
        push();
        // Get the current amplitude level
        let level = amplitude.getLevel();
  
        // Get frequency spectrum
        let spectrum = fourier.analyze();
  
        // Map the amplitude level to a scaling factor (adjust the range as needed)
        let scaleFactor = map(level, 0, 1, 0.5, 2);
        let angle = map(level, 0, 1, -PI / 8, PI / 8);
  
        // Drawing the grand piano
        stroke(0);
        strokeWeight(25);
        fill(0);
        ellipse(this.x + 150, this.y - 158, 300, 300);
        rect(this.x, this.y - 141, 528, 170);
  
        stroke(0);
        strokeWeight(30);
        noFill();
        arc(this.x + 340, this.y - 174, 80, 70, HALF_PI, PI);
  
        strokeWeight(1);
        fill(255);

        // Piano keys (white)
        for (let i = 0; i <= 495; i += 28) {
        rect(this.x + i, this.y, 28, 63);
	  }
  
  
        // Translucent black piano keys with frequency mapping
        this.keyshadow(spectrum);
  
        // Piano keys (black)
        fill(30);
        rect(this.x + 15, this.y, 20, 40);
        rect(this.x + 43, this.y, 20, 40);
        rect(this.x + 73, this.y, 20, 40);
        rect(this.x + 101, this.y, 20, 40);
        rect(this.x + 128, this.y, 20, 40);
        rect(this.x + 155, this.y, 20, 40);
        rect(this.x + 183, this.y, 20, 40);
        rect(this.x + 211, this.y, 20, 40);
        rect(this.x + 238, this.y, 20, 40);
        rect(this.x + 265, this.y, 20, 40);
        rect(this.x + 294, this.y, 20, 40);
        rect(this.x + 321, this.y, 20, 40);
        rect(this.x + 349, this.y, 20, 40);
        rect(this.x + 375, this.y, 20, 40);
        rect(this.x + 403, this.y, 20, 40);
        rect(this.x + 429, this.y, 20, 40);
        rect(this.x + 458, this.y, 20, 40);
        rect(this.x + 487, this.y, 20, 40);
  
        // Notes drawn on a page
        this.drawPages(scaleFactor);
        this.drawNote1(scaleFactor);
        this.drawNote2(scaleFactor);
  
        // Wiper stick
        stroke(255);
        strokeWeight(1);
        fill(40);
  
        push();
        translate(this.x + 500, this.y - 94);
        rotate(angle);
        
        fill(40);
        beginShape();
        vertex(0, 0);
        vertex(-222, -44);
        vertex(-224, -36);
        vertex(-3, 10);
        vertex(0, 0);
        endShape();
        ellipse(-222, -40, 12 * scaleFactor);
        pop();
  
        ellipse(this.x + 500, this.y - 90, 12 * scaleFactor);

        pop();
    }
  
    // Method to draw pages
    this.drawPages = function(scaleFactor) {
        // Page 1
        fill(255);
        beginShape();
        vertex(this.x - 5, this.y - 104);  
        vertex(this.x + 93, this.y - 134);  
        vertex(this.x + 127, this.y - 38);  
        vertex(this.x + 33, this.y - 14);   
        vertex(this.x - 5, this.y - 104);   
        endShape();

        // Lines on page 1
        stroke(0);
        line(this.x + 6, this.y - 97, this.x + 83, this.y - 123);   
        line(this.x + 9, this.y - 93, this.x + 85, this.y - 119);   
        line(this.x + 11, this.y - 89, this.x + 87, this.y - 115); 
        line(this.x + 15, this.y - 80, this.x + 90, this.y - 104);  
        line(this.x + 17, this.y - 75, this.x + 91, this.y - 99);   
        line(this.x + 19, this.y - 70, this.x + 93, this.y - 95);   
        line(this.x + 24, this.y - 62, this.x + 97, this.y - 86);   
        line(this.x + 27, this.y - 57, this.x + 99, this.y - 81);   
        line(this.x + 29, this.y - 51, this.x + 100, this.y - 76);  
        line(this.x + 34, this.y - 41, this.x + 103, this.y - 65);  
        line(this.x + 36, this.y - 37, this.x + 105, this.y - 60);  
        line(this.x + 39, this.y - 31, this.x + 107, this.y - 54);  

        // Page 2
        fill(255);
        strokeWeight(1);
        beginShape();
        vertex(this.x + 170, this.y - 120);  
        vertex(this.x + 170, this.y - 29);   
        vertex(this.x + 268, this.y - 32);   
        vertex(this.x + 265, this.y - 127);  
        endShape();

        // Lines on page 2
        line(this.x + 181, this.y - 111, this.x + 252, this.y - 117);  
        line(this.x + 181, this.y - 106, this.x + 252, this.y - 112);  
        line(this.x + 181, this.y - 101, this.x + 252, this.y - 107);  
        line(this.x + 181, this.y - 93, this.x + 252, this.y - 99);    
        line(this.x + 181, this.y - 88, this.x + 252, this.y - 94);    
        line(this.x + 181, this.y - 83, this.x + 252, this.y - 89);    
        line(this.x + 181, this.y - 75, this.x + 252, this.y - 80);    
        line(this.x + 181, this.y - 70, this.x + 252, this.y - 75);    
        line(this.x + 181, this.y - 65, this.x + 252, this.y - 70);    
        line(this.x + 181, this.y - 56, this.x + 252, this.y - 61);    
        line(this.x + 181, this.y - 51, this.x + 252, this.y - 56);    
        line(this.x + 181, this.y - 46, this.x + 252, this.y - 51);  
    }
  
  // drawing notes on Page 1
    this.drawNote1 = function(scaleFactor) {
        // Note 1
        stroke(10, 30, 40);
        strokeWeight(3);
        fill(10, 30, 40);
        ellipse(this.x + 19, this.y - 91, 8 * scaleFactor);   
        ellipse(this.x + 27, this.y - 99, 8 * scaleFactor);   
        strokeWeight(5 * scaleFactor);
        line(this.x + 19, this.y - 91, this.x + 13, this.y - 105);  
        line(this.x + 13, this.y - 105, this.x + 23, this.y - 111); 
        line(this.x + 23, this.y - 111, this.x + 27, this.y - 101);  
    
        // Note 2
        strokeWeight(3);
        ellipse(this.x + 74, this.y - 88, 8.5 * scaleFactor);  
        strokeWeight(5 * scaleFactor);
        line(this.x + 76, this.y - 88, this.x + 68, this.y - 108);  
        line(this.x + 68, this.y - 108, this.x + 77, this.y - 107);
    
        // Note 3
        strokeWeight(3);
        ellipse(this.x + 43, this.y - 57, 8.5 * scaleFactor);  
        strokeWeight(5 * scaleFactor);
        line(this.x + 45, this.y - 57, this.x + 39, this.y - 74);   
        line(this.x + 39, this.y - 74, this.x + 48, this.y - 74);   
        line(this.x + 40, this.y - 70, this.x + 49, this.y - 70);   
        line(this.x + 48, this.y - 74, this.x + 49, this.y - 70);
    
        // Note 4
        strokeWeight(3)
        fill(10, 30, 40);
        ellipse(this.x + 70, this.y - 40, 8 * scaleFactor);   
        ellipse(this.x + 80, this.y - 48, 8 * scaleFactor);   
        ellipse(this.x + 90, this.y - 55, 8 * scaleFactor);
        stroke(10, 30, 40);
        strokeWeight(3);
        strokeWeight(5 * scaleFactor);
        line(this.x + 70, this.y - 40, this.x + 66, this.y - 55);  
        line(this.x + 66, this.y - 55, this.x + 76, this.y - 62); 
        line(this.x + 76, this.y - 62, this.x + 80, this.y - 50); 
        line(this.x + 76, this.y - 62, this.x + 86, this.y - 68);
        line(this.x + 86, this.y - 68, this.x + 89, this.y - 57);
    }

      // drawing notes on Page 2
    this.drawNote2 = function(scaleFactor) {
        // Note 1
        stroke(10, 30, 40);
        strokeWeight(3);
        fill(10, 30, 40);
        ellipse(this.x + 189, this.y - 99, 8 * scaleFactor);   
        ellipse(this.x + 202, this.y - 101, 8 * scaleFactor); 
        strokeWeight(5 * scaleFactor); 
        line(this.x + 189, this.y - 99, this.x + 188, this.y - 115); 
        line(this.x + 188, this.y - 115, this.x + 201, this.y - 120); 
        line(this.x + 201, this.y - 120, this.x + 202, this.y - 101); 
    
        // Note 2
        strokeWeight(3);
        ellipse(this.x + 229, this.y - 80, 8 * scaleFactor);  
        strokeWeight(5 * scaleFactor); 
        line(this.x + 231, this.y - 80, this.x + 232, this.y - 101);  
        line(this.x + 232, this.y - 101, this.x + 241, this.y - 96);  
    
        // Note 3
        strokeWeight(3);
        ellipse(this.x + 190, this.y - 48, 8 * scaleFactor); 
        strokeWeight(5 * scaleFactor);
        line(this.x + 193, this.y - 48, this.x + 194, this.y - 68);   
        line(this.x + 194, this.y - 68, this.x + 204, this.y - 66);   
        line(this.x + 194, this.y - 63, this.x + 204, this.y - 61);   
        line(this.x + 204, this.y - 66, this.x + 204, this.y - 61);   
      }
    

    // Method to manage piano key shadows based on frequency
    this.keyshadow = function(spectrum) {
        noStroke();
        fill(0, 0, 0, 100); // Translucent black
    
        for (let i = 0; i < this.keys.length - 1; i++) {
            let key = this.keys[i];
            let energy = fourier.getEnergy(key.freqRange[0], key.freqRange[1]);
    
            if (energy > 150) {
                key.state = true;
            } else {
                key.state = false;
            }
    
            // Draw key shadow if active
            if (key.state) {
                // Adjust the position to match the white keys
                rect(this.x + 28 * i, this.y, 28, 63);
            }
        }
    } 
}