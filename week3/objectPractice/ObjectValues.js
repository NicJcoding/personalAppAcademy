const obj = {
    first: "1",
    second: 2,
    third: "three"
}


const printValues = obj => {
    // Write your solution here.
let array = Object.values(obj);
for (let i = 0; i < array.length; i++) {
    let value = array[i];
        console.log(value)
    }
}

printValues(obj);    