// Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.

function wait(n) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, n * 1000);
    });
}
let n = 3;
wait(n).then(function (result) {
    // console.log(result);
});

module.exports = wait;