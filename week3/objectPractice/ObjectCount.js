const obj = {
    red: "circle",
    blue: "square",
    green: "hexagon"
}

// Write your solution here. // where you place count = 0; matters;

//use obj.keys on obj to create another obj of keys
// for to loop through each one of those keys;
// create  count for "e"
// Loop through each one of the letters in current key
// then looop in value
// add an if statemetn to check for letter 
// console.log the count if above or equal to 3


let array = Object.keys(obj) // gives us an array of keys
console.log(array)

// Now you need to loop through the array 

for (let index = 0; index < array.length; index++) { // getting the word
    const element = array[index];
    let value =  obj[element];
    let count = 0; // everytime we hit a new key, it goes back to zero. 
    // console.log(element) // prints red blue and green


    // Now loop through the word
    for (let i = 0; i < element.length; i++) { // getting the letters in key 
        let char = element[i];
         console.log(char) // selected each letter

        if (char === "e") {
            count ++
        }
    }

    // now create another loop to go through values

    for (let i = 0; i < value.length; i++) { // getting the letters in value
        const element = value[i]; // 
        console.log(element) // this goes through the word for valeues

        if (element === "e") {
            count++; 
        }
    }    

    // outside of the for loops, add the final if statement
    if (count >= 3) {
        console.log(value) // value is from the value = obj[element]
    }
} // everything is stored in the main for loop.

// Should print "hexagon