
function reverseString(origStr){

    var outputStr = new Array();
    var origStrLen = origStr.length;
    

    for(let x = origStrLen; x >= 0; x--){
        outputStr.push(origStr.charAt(x));
    }

    //console.log(outputStr);
    return outputStr.join('');
}

function Palindrome(orig,reversed){
    var retVal = false;

    //console.log(removeSpaces(orig));
    //console.log(removeSpaces(reversed));
    
    if(removeSpaces(orig) == removeSpaces(reversed)){
        retVal = true;
    }
    return retVal;
}

function removeSpaces(originalStr){
    var temp = originalStr.split(' ');
    return temp.join('');
}

var reversedStr;
var originalStr;

originalStr = 'race car';
reversedStr = reverseString(originalStr);


console.log('String is: '+originalStr);
if(Palindrome(originalStr,reversedStr)){
    console.log(originalStr+' is a palindrome!')
}else{
    console.log(originalStr+' is not a palindrome!')
}

