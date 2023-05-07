/* 
Write a function that takes in an object that uses car owners' names as keys
and the car brand they own as values. The function should print the names of the
owners whose names are strictly longer than 5 characters and who own a "Honda". */


const obj = {
    Jacky: "Honda",
    Ramon: "Kia",
    Lexi: "Mercedes",
    Eli: "Honda",
    Bradley: "Honda",
    Cecily: "BMW"
}

const printOwners = obj => {
    // Write your solution here.
  let arrays = Object.entries(obj);
  
  for (let i = 0; i < arrays.length; i++) {
    let index = arrays[i];
    // console.log(index);
    for (let j = 0; j < index.length; j++) {
      let names = index[j];
      // console.log(names);
    }
  }

}

printOwners(obj);               // Bradley
