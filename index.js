import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'process';
//imports for reading line to take user input

//Index class
class Index {
//function creating the fibonacci series till n numbers.
  fibonacci(num){
    if (!Number.isInteger(num)) {
      throw new Error('The Parameter must be an integer!');
    }
    if (num < 0) {
      throw new Error('The Parameter must be positive!');
    } else if (num == 0) {
      return [0];
    } else if (num == 1)  {
      return [0, 1];
    } else if (num >= 2)  {
      let arr = [0, 1];
      for (let i = 2; i < num + 1; i++){
        arr.push(arr[i - 2] + arr[i - 1]);
      }
      return arr;
    }
  }
}

//Taking user input
const rl = readline.createInterface({ input, output });
const num = await rl.question('Please enter the number to generate the fibonacci series to. ');

var index = new Index();
  console.log(index.fibonacci(parseInt(num)));
  rl.close();

export default Index;
