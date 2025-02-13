// Capitalize Every first Letter of each word in a String

let sentence =
  "i have an exam tomorrow. what about you? you can share me. i have practical exam of group: x";
let words = sentence.split(" ");

for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  /*The substring() method extracts characters, between two indices (positions), from a string, and returns the substring. 
  Syntex: string.substring(start, end)
  Let's say the words array looks like this:

words = ["hello", "world", "python"]
If i is 0, the code would do the following.
1.words[0] is "hello".
2.words[0][0] is "h".
3.words[0][0].toUpperCase() is "H".
4.words[0].substring(1) is "ello".
5."H" + "ello" is "Hello".
6.words[0] is now "Hello".
7.After the loop (or after this line executes for each i), the words array would become:
8.words = ["Hello", "World", "Python"]


---------------> From Gemini and google...
*/
}

console.log(words.join(" "));
