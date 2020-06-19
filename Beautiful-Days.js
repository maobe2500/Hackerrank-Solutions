function reverseNum(num) {
    let revNum = num.toString().split('').reverse().join('');
    return Number(revNum);
}

function beautifulDays(i, j, k) {
    const nums = [];
    for (let iterator = i; iterator <= j; iterator++) {
        let reversed = reverseNum(iterator);
        nums.push(Math.abs(iterator - reversed) / k);
    }
    let beauties = nums.filter(num => num % 1 === 0);
    return beauties.length;

}
