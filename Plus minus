function plusMinus(arr) {
    let list = [0,0,0]
    arr.forEach(num => {
        if (num > 0) {
            list[0] += 1;
        } else if (num < 0) {
            list[1] += 1;
        } else {
            list[2] += 1;
        }
    })
    
    let pos = list[0] / arr.length,
        neg = list[1] / arr.length, 
        zero = list[2] / arr.length;

    console.log(`${pos}\n${neg}\n${zero}`);
}
