// common.js规范，node就是common.js规范
module.exports = function () {
    let greet = document.createElement("div");
    greet.innerHTML = "hello world";
    return greet;
};