function plusMinus(arr) {
    
    //Initialize a list with zeros for the posetive, negative and zeros
    let list = [0,0,0];
    
    //Go through the "arr" array, check them and add 1 to their place in "list" 
    arr.forEach(num => {
        if (num > 0) {
            list[0] += 1;
        } else if (num < 0) {
            list[1] += 1;
        } else {
            list[2] += 1;
        }
    });
    
    //Calculate the percentage of each and log to the console
    let pos = list[0] / arr.length,
        neg = list[1] / arr.length, 
        zero = list[2] / arr.length;
    
    console.log(`${pos}\n${neg}\n${zero}`);
}
