module.exports = function countCats(array) {
    let arr2 = array.flat(Infinity);
    let arr3 = [];
    for( i = 0; i < arr2.length; i++) {
        if( arr2[i] === "^^") {
            arr3.push(arr2[i]);
        }
    }
    return arr3.length;
    }
