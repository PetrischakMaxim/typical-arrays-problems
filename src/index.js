const isArray = array => !array || !array.length;

exports.min = function min(array) {
    return isArray(array) ? 0 : Math.min(...array);
};

exports.max = function max(array) {
    return isArray(array) ? 0 : Math.max(...array);
};

exports.avg = function avg(array) {
    return isArray(array)
        ? 0
        : array.reduce((total, current) => total + current, 0) / array.length;
};
