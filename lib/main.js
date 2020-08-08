const fs = require('fs');
const { promisify } = require('util');
const stat = promisify(fs.stat);
const { getCopyFileName, calculatePercentageProcessed, consoleOutput } = require('./helpers');

/**
 * Copies the file in the directory provided using Streams
 */
const main = async () => {
    const source = process.argv[2];

    if(!source) {
        return consoleOutput('The source file arg should be provided!');
    }

    const target = process.argv[3] || getCopyFileName(source);
    const readStream = fs.createReadStream(source);
    const writeStream = fs.createWriteStream(target);
    const { size } = await stat(source);
    let alreadyProcessed = 0;

    readStream.pipe(writeStream);
    
    readStream.on('data', (chunk) => {
        alreadyProcessed += chunk.length;
        const percentageProcessed = calculatePercentageProcessed(alreadyProcessed, size);
        consoleOutput(`Processing... ${percentageProcessed}%`);
    });
    writeStream.on('error', (err) => consoleOutput(`Failed to copy file!\n${err.message}`));
    writeStream.on('finish', () => consoleOutput(`File copied with success on: ${target}`));
}

main();