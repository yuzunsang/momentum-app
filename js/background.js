const images = [
  "photo-1542442828-287217bfb87f.avif",
  "photo-1490077476659-095159692ab5.avif",
  "premium_photo-1678233319969-63662b4244f1.avif",
];

const chosenImage = images[~~(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
