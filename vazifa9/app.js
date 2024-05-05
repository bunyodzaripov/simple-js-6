let option;

while (!["+", "-", "/", "*", "0"].includes(option)) {
   option = prompt(
      "+ - addition\n- - subtraction\n * - multiplication\n / - division\n\n 0 - exit"
   );
}

let num1;
while (!num1 || typeof num1 !== "number") {
   num1 = +prompt("Num1: ");
}
let num2;
while (!num2 || typeof num2 !== "number") {
   num2 = +prompt("Num2: ");
}

function app() {
   switch (option) {
      case "+": {
         document.write(`n1 + n2 = ${num1 + num2}`);
         break;
      }
      case "-": {
         document.write(`n1 - n2 = ${num1 - num2}`);
         break;
      }
      case "*": {
         document.write(`n1 * n2 = ${num1 * num2}`);
         break;
      }
      case "/": {
         document.write(`n1 / n2 = ${num1 / num2}`);
         break;
      }
      case "0": {
         document.write("Goodbye");
         break;
      }
      default: {
         document.write("Invalid option");
      }
   }
}

app();
