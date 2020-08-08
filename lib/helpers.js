/**
 * Returns the path without the filename
 * @param {String} source file directory
 * @returns {String}
 */
const getPath = (source) =>  source.split('/').slice(0, -1).join('/');

/**
 * Returns the file name with extension
 * @param {String} source file directory
 * @returns {String}
 */
const getFileFullName = (source) =>  source.split('/').pop();

/**
 * Returns the file extension
 * @param {String} source file directory
 * @returns {String}
 */
const getExtension = (source) => getFileFullName(source).split('.').pop();

/**
 * Returns the file name without extension 
 * @param {String} source file directory
 * @returns {String}
 */
const getFilename = (source) => getFileFullName(source).split('.')[0];

/**
 * Returns the copy file directory with suffix `_copy`
 * @param {Object} file
 * @param {String} file.path
 * @param {String} file.name
 * @param {String} file.extension
 * @returns {String}
 */
const formatCopyFileName = ({ path, name, extension }) => `${path}/${name}_copy.${extension}`;

/**
 * Returns a copy file directory based on source file
 * @param {String} source file directory
 */
const getCopyFileName = (source) => {
    const path = getPath(source);
    const extension = getExtension(source);
    const name = getFilename(source);

    return formatCopyFileName({ path, name, extension });
}

/**
 * Sends to console new output line
 * @param {String} line 
 */
const consoleOutput = (line) => {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(line);
}

/**
 * Returns the percentage of already processed file size
 * @param {Number} processed
 * @param {Number} totalSize
 */
const calculatePercentageProcessed = (processed, totalSize) => (
    Math.round((processed * 100 / totalSize))
);

module.exports = {
    getPath,
    getFileFullName,
    getExtension,
    getFilename,
    formatCopyFileName,
    getCopyFileName,
    consoleOutput,
    calculatePercentageProcessed
}