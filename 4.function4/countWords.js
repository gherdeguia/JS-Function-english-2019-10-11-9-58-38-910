function countWords(originalStr){
    var outputStr = originalStr.split(' ');
    return outputStr.length;
}


var originalStr = 'A THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG';
console.log(countWords(originalStr));

