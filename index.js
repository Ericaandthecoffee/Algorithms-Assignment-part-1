let sentence = prompt("Enter a sentence ending with a full stop: ");

let length = 0;
let words = 0;
let vowels = 0;
let inWord = false;

for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];

    if (char === '.') {
        break;
    }

    length++;

   
    if ("aeiouAEIOU".includes(char)) {
        vowels++;
    }

   
    if (char !== ' ' && inWord === false) {
        words++;
        inWord = true;
    }

    if (char === ' ') {
        inWord = false;
    }
}

console.log("Length:", length);
console.log("Words:", words);
console.log("Vowels:", vowels);