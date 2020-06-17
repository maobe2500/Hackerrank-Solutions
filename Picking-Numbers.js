function pickingNumbers(a) {
    // Write your code here
    let biggest = 0;
    for (let i = 0; i < a.length; i++) {

        let count = 0, j = 0;
        while (j < a.length) {
            if (a[i] === a[j] || a[i] === a[j] + 1) {
                count++;
            }
            if (j === a.length-1) {
                biggest = Math.max(biggest, count);
            }
            j++;
        }
        
    }
    return biggest;
}
