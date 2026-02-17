const { version } = require('../package.json');
const fs = require('fs');

function showHelp() {
  console.log(`
Options:
  --help, -h:     Show this message
  --version, -v:  Show current version
`);

  process.exit(0);
}

function showVersion() {
  console.log(`
${version}
`);
}

function checkPath(path, cb) {
  fs.access(path, (err) => {
    if (err) {
      console.error(err);
    } else {
      cb();
    }
  });
}

module.exports = {
  showHelp,
  showVersion,
  checkPath,
};
