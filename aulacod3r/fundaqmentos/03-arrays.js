const valores = [7.7, 8.8, 6.9, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); // Undefined, as there is no value at index 4

valores[4] = 10;

console.log(valores[4]); // Now it has a value
console.log(valores.length); // Length of the array
console.log(valores); // Displays the entire array

console.log(valores.push({ id: 3 }, false, null, "teste")); // Adds new elements to the array
console.log(valores); // Displays the updated array

console.log(valores.pop()); // Removes the last element and displays it
console.log(valores); // Displays the updated array

console.log(typeof valores); // Displays the type of the variable 'valores'

delete valores[0]; // Deletes the element at index 0
console.log(valores); // Displays the array after deletion
console.log(valores[0]); // Displays the array after deletion