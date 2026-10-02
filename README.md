# Music Visualiser

A music visualiser built with [p5.js](https://p5js.org/) and p5.sound for the Introduction to Programming 2 final submission (MY0469 / CM1010). It plays a track in the browser and draws eight different visualisations that react to the music in real time.

## How It Works

The project analyses the audio as it plays and uses the results to drive the graphics:

- `p5.FFT` splits the sound into frequency bands (the spectrum, and the bass and treble energy).
- `p5.Amplitude` measures the overall loudness of the track.

Each visualisation is its own file and exposes a `draw()` function. A small container (`Visualisations`) stores them all and keeps track of which one is on screen, so you can switch between them while the music plays.

## Visualisations

| # | Name | What it shows |
|---|------|---------------|
| 1 | CDBuilding | A skyline of buildings whose heights follow the frequency spectrum, with windows that move with the sound and a pulsing red disc at the centre |
| 2 | sineWave | Layered, recursively drawn sine waves whose speed changes with the amplitude of each frequency |
| 3 | spiralFlower | A spiral of flowers along a curve whose size and length respond to the bass and the average amplitude |
| 4 | Stars | A row of recursively drawn stars that grow and gain points with the loudness, in changing colours |
| 5 | grandPiano | A grand piano whose keys light up according to frequency ranges in the music |
| 6 | Mandelbrot Set | A Mandelbrot fractal whose detail and distortion respond to the music's level |
| 7 | heartbeat wave | A heartbeat-style wave drawn from the frequency spectrum, with ellipses sized by amplitude |
| 8 | circle Packing | Circles that gather into a musical note and scatter again depending on the beat |

## Controls

| Input | Action |
|-------|--------|
| Click the play/pause button (top left) | Start or pause the music |
| Click anywhere else | Toggle fullscreen |
| `Space` | Show or hide the visualisation menu |
| `1` to `8` | Select a visualisation |

## Run Locally

The audio file is loaded at startup, so serve the project from a local web server. You need Python 3 installed.

```bash
git clone https://github.com/ayeshaatif07/MY0469-CM1010-ITP2-Final-Submission.git
cd MY0469-CM1010-ITP2-Final-Submission
python3 -m http.server 8000
```

Then:

1. Open http://localhost:8000 in your browser.
2. Click the play button in the top left to start the music.
3. Press `Space` to see the menu, or `1` to `8` to switch visualisations.

Press `Ctrl+C` in the terminal to stop the server.

## Project Structure

| File / folder | Purpose |
|---------------|---------|
| `index.html` | Loads the libraries and all scripts |
| `sketch.js` | Setup, the draw loop and registering the visualisations |
| `controlsAndInput.js` | Mouse and keyboard handling and the on-screen menu |
| `playbackButton.js` | The play/pause button |
| `visualisations.js` | Container that stores and selects visualisations |
| `CDBuilding.js`, `sineWave.js`, `spiralFlower.js`, `stars.js`, `grandPiano.js`, `mandelbrotSet.js`, `heartbeatWave.js`, `circlePacking.js` | The eight visualisations |
| `assets/` | Audio track (`bumtum.mp3`) |
| `lib/` | p5.js and p5.sound |
| `figures/` | Images from the original case-study brief |
| `Report Documents/` | Brainstorming notes, Gantt chart, class diagram and the original case-study brief |

## Credits

- Case-study template: Goldsmiths, University of London, Introduction to Programming.
- Built with [p5.js](https://p5js.org/) and [p5.sound](https://p5js.org/reference/#/libraries/p5.sound).
