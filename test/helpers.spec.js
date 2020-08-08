const { assert } = require('chai');
const { 
    getPath, 
    getFileFullName, 
    getExtension, 
    getFilename,
    formatCopyFileName,
    getCopyFileName,
    calculatePercentageProcessed,
} = require('../lib/helpers');

describe('Testing getPath', () => {
    it('Should return the path without the filename', () => {
        const path = '/dir/subdir/filename.extension';
        assert.equal(getPath(path), '/dir/subdir');
    });
});


describe('Testing getFileFullName', () => {
    it('Should return the file name with extension', () => {
        const path = '/dir/subdir/filename.extension';
        assert.equal(getFileFullName(path), 'filename.extension');
    });
});

describe('Testing getExtension', () => {
    it('Should return the file extension', () => {
        const path = '/dir/subdir/filename.extension';
        assert.equal(getExtension(path), 'extension');
    });
});

describe('Testing getFilename', () => {
    it('Should return the file name without extension', () => {
        const path = '/dir/subdir/filename.extension';
        assert.equal(getFilename(path), 'filename');
    });
});

describe('Testing formatCopyFileName', () => {
    it('Should return the copy file directory with suffix `_copy`', () => {
        const path = '/dir/subdir';
        const name = 'filename';
        const extension = 'extension';
        const copiedFilePath = formatCopyFileName({ path, name, extension });
        assert.equal(copiedFilePath, '/dir/subdir/filename_copy.extension');
    });
});

describe('Testing getCopyFileName', () => {
    it('Should return a copy file directory based on source file', () => {
        const path = '/dir/subdir/filename.extension';
        const copiedFilePath = getCopyFileName(path);
        assert.equal(copiedFilePath, '/dir/subdir/filename_copy.extension');
    });
});

describe('Testing calculatePercentageProcessed', () => {
    it('Should return the percentage of already processed file size', () => {
        const processed = 100; 
        const totalSize = 1000;
        const percentage = calculatePercentageProcessed(processed, totalSize);
        assert.equal(percentage, 10);
    });
});