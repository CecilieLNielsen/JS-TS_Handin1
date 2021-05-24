function myReduce(array, callback) {
    console.log(array);
    if (array.length === 1) {
        return array[0];
    }
    var newArray = callback(array);
    return myReduce(newArray, callback);
}

function addition(array) {
    var newArray = array;
    newArray[0] = newArray[0] + newArray.pop();
    return newArray;
}

var numbers = [1, 2, 3, 4, 5];

console.log(myReduce(numbers, addition));
