
function addBinaryEasy(a, b) {
    return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
}




function addBinaryHard(a, b) {
    let result = '';
    let carry = 0;
    let remainder = 0;

    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0) {
        let sum = carry;
        if (i >= 0) {
            sum += parseInt(a[i]);
            i--;
        }
        if (j >= 0) {
            sum += parseInt(b[j]);
            j--;
        }
        remainder = sum % 2;
        carry = Math.floor(sum / 2)
        result = remainder + result;
    }
    if (carry > 0) {
        result = carry + result;
    }  else {
        result = '0' + result;
    }
    return result;
}

console.log(addBinaryHard('01', '10')); // 100