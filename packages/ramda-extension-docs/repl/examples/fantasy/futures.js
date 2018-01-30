const log = console::console.log;
const error = console::console.error;

const url = 'http://reqr.es/api/users?page=3';

const xhr = function(url) {
    return new Future(function(rej, res) {
        const oReq = new XMLHttpRequest();
        oReq.addEventListener("load", res, false);
        oReq.addEventListener("error", rej, false);
        oReq.addEventListener("abort", rej, false);
        oReq.open("get", url, true);
        oReq.send();
    });
};

const f = R.compose(R.map(S.parseJson), R.map(R.path(['target', 'response'])), xhr)(url);

f.fork(error, R.map(log)); //=> Object {page: "3", per_page: 3, total: 12, total_pages: 4, data: Array[3]}