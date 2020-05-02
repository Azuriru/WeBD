const fs = require('fs');
const path = require('path');
const top = path.join(__dirname, 'discord');
const files = fs.readdirSync(top)
  .filter(file => file.endsWith('.css'))
  .map(file => path.join(top, file))
  .map(path => fs.readFileSync(path).toString());

fs.writeFileSync(path.join(__dirname, 'discord.css'), files.join('\n\n'));
console.log('Created!');