function generateSequence(num) {
  let sequence = [];

  for (let i = 1; i < 5; i++) {
    sequence.push(i, i);
  }
  if (num === 9) {
    return 5;
  } else if (num < 9) {
    return sequence[num - 1];
  } else {
    return sequence[8 - (num - 9)];
  }
}

// Usage example
const generatedSequence = generateSequence(15);
console.log(generatedSequence);
