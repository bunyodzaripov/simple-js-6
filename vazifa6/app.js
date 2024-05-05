function num(n) {
   let numbers = [];
   for (let i = 1; i <= n; i++) {
      if (i % 2 == 0) {
         numbers.push(i);
      }
   }
   return numbers;
}
let n = 10;
let numbers = num(n);
document.write(numbers);
