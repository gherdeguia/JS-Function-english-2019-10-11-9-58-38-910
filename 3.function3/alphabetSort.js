function alphabetSort(originalStr){
    var outputStr = new Array();
    var origStrLen = originalStr.length;
    

    for(let x = origStrLen; x >= 0; x--){
        outputStr.push(originalStr.charAt(x));
    }
    outputStr.sort();
    return outputStr.join('');
}


var originalStr = 'hello';
console.log(alphabetSort(originalStr));

