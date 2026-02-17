#!/usr/bin/env node
const { hasFlag, getParamValue } = require('./utils');
const { showHelp, showVersion, checkPath } = require('./utils/flagUtils');
const args = process.argv.slice(2);

if (hasFlag(args, ['--help', '-h'])) {
  showHelp();
}

if (hasFlag(args, ['--version', '-v'])) {
  showVersion();
}

if (hasFlag(args, ['--output', '-o'])) {
  const outputDir =
    getParamValue(args, '--output') || getParamValue(args, '-o');

  checkPath(outputDir, () => console.log(`Output dir is ${outputDir}`));
}
