function heartbeatWave() {
    this.name = "heartbeat wave";
    this.r = 15;

    this.draw = function () {
        push();
        background(0); 
        // angleMode(DEGREES);
        translate(width / 2, height / 2);

        // Get the current amplitude level
        let level = amplitude.getLevel();

        // Map the amplitude level to a translation factor for slight bouncing effect
        let bounce = map(level, 0, 1, 1.00, 1.30);

        push();
        // Draw the spectrum heartbeat wave
        this.drawSpectrumWave();
        pop();

        beginShape();
        noStroke();
        fill(158, 2, 2); 

        for (let t = 0; t < 360; t++) {
          let angle = t * PI/180;
          let x = this.r * (16 * sin(angle) * sin(angle) * sin(angle)) * bounce;
          let y = -this.r * (13 * cos(angle) - 5 * cos(2 * angle) - 2 * cos(3 * angle) - cos(4 * angle)) * bounce;

          // Map the amplitude level to the size of the ellipses
          let ellipseSize = map(level, 0, 1, 10, 50);

          vertex(x, y);
          vertex(x / 3, y / 3);
          ellipse(x, y, ellipseSize, ellipseSize);
        }
        endShape();
        pop();
    }

    this.drawSpectrumWave = function () {
      // Analyze the frequency spectrum
        let spectrum = fourier.analyze(); 
        noFill();
        stroke(0, 240, 255); 
        strokeWeight(4);

        beginShape();
          for (let i = 0; i < spectrum.length; i++) {
            // Mapping the x position
            let x = map(i, 0, spectrum.length, -width / 2, width / 2); 
            // Mapping the y position based on the spectrum
            let y = map(spectrum[i], 0, 255, 0, -height / 4); 

            vertex(x, y);
          }
        endShape();
    }
}
