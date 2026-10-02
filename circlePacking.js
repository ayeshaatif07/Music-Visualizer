function circlePacking() {
    // Visualisation name
    this.name = "circle Packing";
  
    // Initialize circles randomly across the screen
    this.circles = [];

    for (let i = 0; i < 550; i++) {
      this.circles.push({
        x: random(windowWidth),
        y: random(windowHeight),
        size: random(5, 15),
        targetX: random(windowWidth),
        targetY: random(windowHeight),
        inLeftNotehead: false
      });
    }

    this.converged = false;
    this.dispersing = false;
  
    this.draw = function() {
        push();
        background(0);
        noFill();
        stroke(0);
    
        // Draw the base musical note
        rect(500, 130, 310, 70); // Horizontal beam
        rect(430, 130, 70, 320); // Left stem
        rect(810, 130, 70, 320); // Right stem
        ellipse(445, 455, 120, 120); // Left notehead
        ellipse(820, 440, 120, 120); // Right notehead
    
        stroke(255);
    
        // Get the amplitude level and FFT spectrum
        let level = amplitude.getLevel();
        let spectrum = fourier.analyze();
        let bass = fourier.getEnergy("bass");
    
        // Determine convergence or dispersion based on music beat
        if (bass > 200) {
          this.converged = true;
          this.dispersing = false;
        } 
        else 
        {
          this.converged = false;
          this.dispersing = true;
        }
    
        // Move and draw the circles
        for (let i = 0; i < this.circles.length; i++) {
          let circle = this.circles[i];
    
          if (this.converged) {
            // Set target positions within different parts of the note
            if (!this.isInsideNoteShape(circle.targetX, circle.targetY)) {
              let targetArea = random();
    
              if (targetArea < 0.1) { // Decreased probability for the left notehead
                // Target left notehead
                circle.targetX = random(385, 505);
                circle.targetY = random(395, 515);
              } 
              else if (targetArea < 0.2) { // Decreased probability for the right notehead
                // Target right notehead
                circle.targetX = random(755, 885);
                circle.targetY = random(380, 500);
              } 
              else if (targetArea < 0.5) { // Increased probability for the beam
                // Target beam
                circle.targetX = random(500, 810);
                circle.targetY = random(130, 200);
              } 
              else if (targetArea < 0.75) { // Increased probability for the left stem
                // Target left stem
                circle.targetX = random(430, 500);
                circle.targetY = random(130, 450);
              } 
              else { // Remaining probability for the right stem
                // Target right stem
                circle.targetX = random(810, 880);
                circle.targetY = random(130, 450);
              }
            }
    
            // Move towards target positions
            circle.x = lerp(circle.x, circle.targetX, 0.1);
            circle.y = lerp(circle.y, circle.targetY, 0.1);
    
            // Slight random movement within the shape for animation effect
            if (this.isInsideNoteShape(circle.x, circle.y)) {
              circle.x += random(-1, 1);
              circle.y += random(-1, 1);
            }
          } 
          else if (this.dispersing) {
            // Disperse circles across the screen
            circle.x += random(-5, 5);
            circle.y += random(-5, 5);
    
            // Wrap around edges
            if (circle.x > windowWidth) circle.x = 0;
            if (circle.x < 0) circle.x = windowWidth;
            if (circle.y > windowHeight) circle.y = 0;
            if (circle.y < 0) circle.y = windowHeight;
          }
    
          // Draw the circle
          ellipse(circle.x, circle.y, circle.size);
        }
        pop();
    };
  
    // Function to check if a point is inside the musical note shape
    this.isInsideNoteShape = function(x, y) {
        let inBeam = x >= 500 && x <= 810 && y >= 130 && y <= 200;
        let inLeftStem = x >= 430 && x <= 500 && y >= 130 && y <= 450;
        let inRightStem = x >= 810 && x <= 880 && y >= 130 && y <= 450;
        let inLeftNotehead = dist(x, y, 445, 455) <= 60;
        let inRightNotehead = dist(x, y, 820, 440) <= 60;
    
        return inBeam || inLeftStem || inRightStem || inLeftNotehead || inRightNotehead;
    };
  }
