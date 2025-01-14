const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const isVowel = (input) =>
  ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].includes(input);

rl.question(`Enter phrase for vowel reversal?\n -> `, (phrase) => {
  console.log(`Your chosen phrase is! ${phrase}`);

  const vowelArray = [];
  let vowelIndex = [];
  const phraseArray = [...phrase];

  // Cycle through the phrase and capture the vowels and their respective indexes
  phraseArray.forEach((item, index) => {
    if (isVowel(item)) {
      vowelArray.push(item);
      vowelIndex.unshift(index); // reversing the index sequence
    }
  });

  let ind = 0;
  vowelArray.forEach((item) => {
    phraseArray[vowelIndex[ind]] = item;
    ind++;
  });

  console.log("Result of reversing the vowels is > ", phraseArray.join(""));
  rl.close();
});
