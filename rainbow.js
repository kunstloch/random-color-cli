let col = process.argv[3];
let lum = process.argv[2];

var randomColor = require('randomcolor'); // import the script
var color = randomColor({
  luminosity: lum,
  hue: col
});

const chalk = require('chalk');

for (i = 0; i < 3; i++) {
  console.log(chalk.hex(color)('#################'));
}
console.log(chalk.hex(color)('###           ###'));
console.log(chalk.hex(color)('### ', color, ' ###'));
console.log(chalk.hex(color)('###           ###'));
for (i = 0; i < 3; i++) {
  console.log(chalk.hex(color)('#################'));
}
