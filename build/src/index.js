"use strict";
exports.__esModule = true;
exports.Challenge = void 0;
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.prototype.buzz = function (n) {
        var output = "";
        return new Promise(function (resolve, reject) {
            if (n % 3 == 0)
                output += "fizz";
            if (n % 5 == 0)
                output += "buzz";
            else if (n % 3 != 0)
                resolve(n);
            resolve(output);
        });
    };
    return Challenge;
}());
exports.Challenge = Challenge;
