export default () => {

  let num1 = Math.floor(Math.random() * 100);
  let num2 = Math.floor(Math.random() * 100);
  let result;

  if (num1 % 2 === 0) {
    result = num1 + num2;
  } else if (num1 % 3 === 1) {
    result = Math.floor(Math.random() * 100);
  } else {
    result = Math.floor(Math.random() * 100);
  }

  return { num1, num2, result };

};