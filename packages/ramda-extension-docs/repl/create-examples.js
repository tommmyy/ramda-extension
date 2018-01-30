import fs from 'fs';
import R from 'ramda';
import vfs from 'vinyl-fs';
import through2 from 'through2';

const src = './examples/**/*.js';
const dest = './examples/example.json';
const stream = vfs.src(src);
const examplesList = [];
const options = {
    objectMode: true
};

const groupByCategory = R.groupBy(R.prop('category'));
const removeExtension = R.compose(R.replace('.js', ''), R.last);
const takeSecondToLast = R.compose(R.takeLast(1), R.dropLast(1));

const transform = function transform(chunk, enc, callback) {
    const arr = chunk.path.split('/');
    const obj = {
        category: takeSecondToLast(arr),
        title: removeExtension(arr),
        code: chunk.contents.toString()
    };

    examplesList.push(obj);
    callback();
};

const flush = function flush(callback) {
    const object = groupByCategory(examplesList);
    this.push(JSON.stringify(object, null, 2));
    callback();
};

stream.pipe(through2(options, transform, flush)).pipe(fs.createWriteStream(dest));
