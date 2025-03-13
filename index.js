function inverterString(str) {
  let invertida = "";
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
  return invertida
}
let input = "Nome"; 

console.log("String original:", input);
console.log("String invertida:", inverterString(input));
