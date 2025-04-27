import { Fireworks } from 'fireworks-js';

// Create a dummy HTMLDivElement for testing (in real usage, this would be a real DOM element)
const dummyDiv = document.createElement('div');

// Instantiate Fireworks (should not throw type errors if the declaration works)
const fireworks = new Fireworks(dummyDiv, {
  rocketsPoint: { min: 50, max: 50 }, // Fixed to match expected type
  hue: { min: 0, max: 360 },
  delay: { min: 15, max: 30 },
  traceSpeed: 10, 
  acceleration: 1.02,
  friction: 0.96,
  gravity: 1.5,
  particles: 50,
  explosion: 5,
  autoresize: true,
});

// Start and stop (should not throw errors)
fireworks.start();
fireworks.stop();
