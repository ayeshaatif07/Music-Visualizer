//code written by myself(start)
function stars() {
  this.name = "Stars";
  this.x = windowWidth / 2;
  this.y = windowHeight / 2;
  this.amplitude = amplitude;
  this.maxDepth = 15; // maximum depth for recursion -> number of edges of stars it will go up till
  this.star = []; // Array to hold star data
  this.positions = [
    { x: 150, y: 200 },
    { x: 350, y: 450 },
    { x: 550, y: 180 },
    { x: 750, y: 450 },
    { x: 950, y: 190 },
    { x: 1150, y: 450 }
  ];

  this.draw = function () {
    noFill();
    stroke(0);
    push();

    background(0); // Clear the canvas
    stroke(0);

    var level = amplitude.getLevel(); // Get the amplitude level

    var size = map(level, 0, 1, 50, 250); // Mapping the amplitude level to control the size of the this.stars
    var depth = map(level, 0, 1, 0, this.maxDepth); // Mapping the amplitude level to control the depth of the stars

    // Draw each star
    for (var i = 0; i < this.positions.length; i++) {
      this.star = this.positions[i];
      var points = 5 + 2 * depth;
      this.drawRecursiveStar(this.star.x, this.star.y, size, points, 0, this.maxDepth);
    }
    pop();
  }

  this.drawRecursiveStar = function (x, y, radius, points, currentDepth, maxDepth) {
    if (currentDepth <= maxDepth) {
      a = random(0, 255);
      b = random(0, 255);
      c = random(0, 255);
      stroke(a, b, c);
      //1* code written by myself(end)

      //code written by myself but I took a bit of help from my teacher(start) 
      var angleStep = TWO_PI / points;
      var halfAngleStep = angleStep / 2.0;
      beginShape();
      for (var i = 0; i < points; i++) {
        var angle = i * angleStep - HALF_PI;
        var innerAngle = angle + halfAngleStep;
        var outer_X = x + cos(angle) * radius;
        var outer_Y = y + sin(angle) * radius;
        var inner_X = x + cos(innerAngle) * (radius / 2);
        var inner_Y = y + sin(innerAngle) * (radius / 2);
        vertex(outer_X, outer_Y);
        vertex(inner_X, inner_Y);
      }
      endShape(CLOSE);

      // Increment the depth and draw the next iteration
      var nextDepth = currentDepth + 1;
      this.drawRecursiveStar(x, y, radius, points, nextDepth, this.maxDepth);
      //code written by myself but I took a bit of help from my teacher(end)
    }
  }
}

