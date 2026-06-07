// console.log({parseData,resolvedPath,extname,basename,dirname});
const path = require('path');

console.log(__dirname);
console.log(__filename);

const parseData = path.parse(__filename);
const resolvedPath = path.resolve(__filename);
const extname = path.extname(__filename);
const basename = path.basename(__filename);
const dirname = path.dirname(__filename);

console.log({
    parseData,
    resolvedPath,
    extname,
    basename,
    dirname,
    separator: path.sep,
});
//terminal-->node path_module.js