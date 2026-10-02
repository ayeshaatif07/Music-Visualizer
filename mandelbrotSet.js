function mandelbrotSet() {
  this.name = "Mandelbrot Set";
  
  // Set the pixel density (useful for rendering the fractal correctly on high-DPI screens)
  pixelDensity(1);

  // Draw function to render the Mandelbrot set
  this.draw = function() {
      background(0);  

      let level = amplitude.getLevel();

      // Map the level to control the maximum number of iterations (affects fractal detail)
      let maxiterations = int(map(level, 0, 1, 50, 200));

      // Map the level to create distortion effects
      let distortion = map(level, 0, 1, 1, 2);

      let colorOffset = map(level, 0, 1, 0, 255);

      // Load the pixel data for manipulation
      loadPixels();

      // Loop through every pixel on the screen
      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          // Map pixel coordinates to complex plane for fractal computation
          let a = map(x, 0, width, -2.5, 2.5);
          let b = map(y, 0, height, -1.5, 1.5);

          // Store original values of 'a' and 'b' (needed for recursion)
          let ca = a;
          let cb = b;

          // Calculate how many iterations this pixel remains bounded in the Mandelbrot set
          let n = this.mandelbrot(a, b, ca, cb, maxiterations, 0, distortion);

          // Map the number of iterations to brightness for color
          let bright = map(n, 0, maxiterations, 0, 255);
          let r = (bright + colorOffset) % 255;      
          let g = (bright * 0.5 + colorOffset) % 255; 
          let bColor = (bright * 0.2 + colorOffset) % 255;  

          //  set the color to black If the pixel is in the Mandelbrot set
          if (n == maxiterations) {
            r = 0;
            g = 0;
            bColor = 0;
          }

          // Set the pixel color in the pixel array
          let pix = (x + y * width) * 4;
          pixels[pix + 0] = r;
          pixels[pix + 1] = g;
          pixels[pix + 2] = bColor;
          pixels[pix + 3] = 255; 
        }
      }
      // Update the pixels on the screen
      updatePixels();
  };

  // Recursive function to calculate whether a point belongs to the Mandelbrot set
  this.mandelbrot = function(a, b, ca, cb, maxiterations, n, distortion) {
      if (n >= maxiterations) {
        return n;
      }

      // Mandelbrot calculation
      let aa = a * a - b * b;  
      let bb = 2 * a * b;      

      // Update 'a' and 'b' with distortion factor
      a = aa + ca * distortion;
      b = bb + cb * distortion;

      // If the magnitude of the complex number exceeds a certain value, escape
      if (abs(a + b) > 16) {
        return n;
      }

      // Recursive call to calculate the next iteration
      return this.mandelbrot(a, b, ca, cb, maxiterations, n + 1, distortion);
  };
}
