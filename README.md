# Music Visualiser

A music visualiser built with [p5.js](https://p5js.org/) and p5.sound for the Introduction to Programming 2 final submission (MY0469 / CM1010). It plays a track and draws visualisations that react to the music using the Fast Fourier Transform (`p5.FFT`) and amplitude (`p5.Amplitude`) analysis.

## Visualisations

Eight visualisations are included and can be switched while the music plays.

| # | Name | Added |
|---|------|-------|
| 1 | CDBuilding | Midterm |
| 2 | sineWave | Midterm |
| 3 | spiralFlower | Midterm |
| 4 | Stars | Midterm |
| 5 | grandPiano | After midterm |
| 6 | Mandelbrot Set | After midterm |
| 7 | heartbeat wave | After midterm |
| 8 | circle Packing | After midterm |

A few highlights:

- **grandPiano**: piano keys light up according to frequency ranges in the music.
- **Mandelbrot Set**: a fractal whose detail and distortion respond to the music's level.
- **heartbeat wave**: a heartbeat-style wave drawn from the frequency spectrum, with ellipses sized by amplitude.
- **circle Packing**: circles gather into a musical note and disperse depending on the beat.

## Controls

| Input | Action |
|-------|--------|
| Click the play/pause button (top left) | Start or pause the music |
| Click anywhere else | Toggle fullscreen |
| `Space` | Show or hide the visualisation menu |
| `1` to `8` | Select a visualisation |

## Project Structure

| File | Purpose |
|------|---------|
| `index.html` | Loads the libraries and all scripts |
| `sketch.js` | Setup, the draw loop and registering the visualisations |
| `controlsAndInput.js` | Mouse and keyboard handling and the on-screen menu |
| `playbackButton.js` | The play/pause button |
| `visualisations.js` | Container that stores and selects visualisations |
| `CDBuilding.js`, `sineWave.js`, `spiralFlower.js`, `stars.js` | Midterm visualisations |
| `grandPiano.js`, `mandelbrotSet.js`, `heartbeatWave.js`, `circlePacking.js` | Visualisations added after the midterm |
| `assets/` | Audio track (`bumtum.mp3`) |
| `lib/` | p5.js and p5.sound |
| `figures/` | Images from the original case-study brief |
| `Report Documents/` | Brainstorming notes, Gantt chart, class diagram and the original case-study brief |

## Run Locally

The audio file is loaded at startup, so serve the project from a local web server:

```bash
git clone https://github.com/ayeshaatif07/MY0469-CM1010-ITP2-Final-Submission.git
cd MY0469-CM1010-ITP2-Final-Submission
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser and click the play button. Press `Ctrl+C` in the terminal to stop the server.

## Credits

- Case-study template: Goldsmiths, University of London, Introduction to Programming.
- Built with [p5.js](https://p5js.org/) and [p5.sound](https://p5js.org/reference/#/libraries/p5.sound).
