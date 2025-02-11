// If a given string has either x, replace x by y. if the given string has X, replace it by Y

let sentence =
  "I have an exam tomorrow. What about you? You can share me. I have practical exam of group:X";

let replacedSentence = sentence.replaceAll("x", "y");

replacedSentence = replacedSentence.replaceAll("X", "Y");

console.log(replacedSentence);
