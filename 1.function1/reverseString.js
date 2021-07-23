
function reverseString(origStr){

    var outputStr = new Array();
    var origStrLen = origStr.length;
    

    for(let x = origStrLen; x >= 0; x--){
        outputStr.push(origStr.charAt(x));
    }

    //console.log(outputStr);
    return outputStr.join('');
}

console.log(reverseString('palindrome'));

console.log(reverseString('hello'));