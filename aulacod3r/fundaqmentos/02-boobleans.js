let isActive = true;
console.log(isActive ? "Active" : "Inactive");
console.log(!!isActive ? "Active" : "Inactive");

isActive = false ;
console.log(isActive ? "Active" : "Inactive");

isActive = 2 ;
console.log(isActive ? "Active" : "Inactive");

isActive = 0 ;
console.log(isActive);
console.log(!!isActive);
console.log(isActive ? "Active" : "Inactive");

let alfa =""

console.log(alfa || "Desconhecido");
