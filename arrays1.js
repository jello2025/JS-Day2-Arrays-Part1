let groceries = ["banana", "chocomilk", "apples", "juice", "cookies", "carrots"]
console.log(groceries[1]);

console.log(groceries.length);

let lastElement = groceries.length - 1

console.log(groceries[lastElement]);

console.log(groceries.pop());

console.log(groceries.push("water", "biscuits"));

let firstThreeItems = [groceries.slice(3, 6)]
console.log(firstThreeItems);

//challenge 

let deleteThirdElement = groceries.splice(2, 1)
console.log(deleteThirdElement);

let newElement = groceries.unshift("coconut")
console.log(newElement);

groceries.splice(0, 1, "ketchup", "chili")