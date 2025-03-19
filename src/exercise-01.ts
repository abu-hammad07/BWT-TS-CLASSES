// exercise 1 

function processData(input: string | number[]): string | number {
    if(typeof input === "string"){
        return input.toUpperCase();
    }else if(Array.isArray(input)){
        return input.reduce((sum, num) => sum + num, 0);
    }

    return "invalid input";
}

console.log(processData("Abu Hammad"));
console.log(processData([1, 2, 3, 4, 5]));

