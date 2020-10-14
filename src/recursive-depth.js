const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth (arr) {
      return Array.isArray(arr) ? (1 + Math.max(...arr.map(key => this.calculateDepth(key.length === 0 ? [1] : key)))) : 0;
    }
}