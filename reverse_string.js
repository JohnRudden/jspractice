let myString =
  "Speaking the Truth in times of universal deceit is a revolutionary act.";

console.log(myString);

function reverseString(string, method) {
  const start = performance.now();
  console.log(`Result from ${method.name} =  `, method(string));
  const end = performance.now();
  console.log(`${method.name} ran in `, end - start);
}

function method_1(string) {
  const tempArray = [];
  [...string].forEach((item) => {
    tempArray.unshift(item);
  });
  return tempArray.join("");
}

function method_2(string) {
  return string.split("").reverse().join("");
}

function method_3(string) {
  return [...string].reverse().join("");
}

reverseString(myString, method_1);
reverseString(myString, method_2);
reverseString(myString, method_3);
