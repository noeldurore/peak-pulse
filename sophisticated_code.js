/* sophisticated_code.js */

// This code generates a Mandelbrot fractal using the Escape-Time Algorithm

// Define the canvas dimensions
const width = 800;
const height = 600;

// Create a canvas element
const canvas = document.createElement('canvas');
canvas.width = width;
canvas.height = height;
document.body.appendChild(canvas);

// Get the 2D rendering context
const context = canvas.getContext('2d');

// Define the fractal properties
const xmin = -2;
const xmax = 1;
const ymin = -1;
const ymax = 1;
const maxIterations = 1000;

// Function to map a value from one range to another
function mapRange(value, inMin, inMax, outMin, outMax) {
  return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

// Function to check if a point is in the Mandelbrot set
function isInMandelbrotSet(x, y) {
  let zx = 0;
  let zy = 0;

  for (let i = 0; i < maxIterations; i++) {
    const zxTemp = zx * zx - zy * zy + x;
    const zyTemp = 2 * zx * zy + y;

    zx = zxTemp;
    zy = zyTemp;

    if (zx * zx + zy * zy > 4) {
      return i;
    }
  }

  return maxIterations;
}

// Function to render the Mandelbrot set
function renderMandelbrotSet() {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const a = mapRange(x, 0, width, xmin, xmax);
      const b = mapRange(y, 0, height, ymin, ymax);
      const n = isInMandelbrotSet(a, b);

      const hue = mapRange(n, 0, maxIterations, 0, 360);
      const saturation = 100;
      const lightness = mapRange(n, 0, maxIterations, 0, 100);

      context.fillStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      context.fillRect(x, y, 1, 1);
    }
  }
}

// Render the Mandelbrot set
renderMandelbrotSet();