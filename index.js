const tinycolor = require("tinycolor2");

function generatePalette(baseColor) {
  const color = tinycolor(baseColor);
  if (!color.isValid()) throw new Error("Invalid color format");

  return {
    base: color.toHexString(),
    complementary: color.complement().toHexString(),
    analogous: color.analogous().map(c => c.toHexString()),
    triadic: color.triad().map(c => c.toHexString())
  };
}

function adjustBrightness(color, amount) {
  const modifiedColor = tinycolor(color).brighten(amount);
  if (!modifiedColor.isValid()) throw new Error("Invalid color format");
  return modifiedColor.toHexString();
}

function checkContrast(color1, color2) {
  return tinycolor.readability(color1, color2) >= 4.5;
}

module.exports = {
  generatePalette,
  adjustBrightness,
  checkContrast
};
