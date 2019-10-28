const col = process.argv[3];
const lum = process.argv[2];

// import and use randomcolor
const randomColor = require('randomcolor');

// Returns a hex code for a 'truly random' color
const color = randomColor({
  luminosity: lum,
  hue: col
});

// import and use chalk
const chalk = require('chalk');

// log out colored box with the hex-code inside
for (i = 0; i < 3; i++) {
  console.log(chalk.hex(color)('#################'));
}
console.log(chalk.hex(color)('###           ###'));
console.log(chalk.hex(color)('### ', color, ' ###'));
console.log(chalk.hex(color)('###           ###'));
for (i = 0; i < 3; i++) {
  console.log(chalk.hex(color)('#################'));
}
