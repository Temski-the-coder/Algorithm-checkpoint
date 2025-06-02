function analyzeSentence() {
  const sentence = document.getElementById("sentenceInput").value;

  // Check if the last character is a period
  if (sentence.charAt(sentence.length - 1) !== ".") {
    alert("The sentence must end with a period.");
    return;
  }

  // Initialize counters
  let charCount = 0;
  let wordCount = 1; // Starts at 1 assuming words are separated by one space
  let vowelCount = 0;

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    charCount++;

    if (char === ' ') {
      wordCount++;
    }

    if (vowels.includes(char.toLowerCase())) {
      vowelCount++;
    }
  }

  document.getElementById("output").innerHTML = `
    <strong>Results:</strong><br>
    Sentence Length: ${charCount} characters<br>
    Number of Words: ${wordCount}<br>
    Number of Vowels: ${vowelCount}
  `;
}
