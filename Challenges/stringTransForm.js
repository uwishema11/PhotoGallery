function stringTransformation(strin) {
  // Initializing an empty string to store the output
  let output = "";

  // Check if the length of the input string is divisible by both 3 and 5

  if (strin.length % 3 === 0 && strin.length % 5 === 0) {
    // If true, reverse the string, replace each character with its ASCII code, and join them with spaces
    output = strin
      .split("") // Split the string into an array of characters
      .reverse() // Reverse the array
      .map((element) => element.charCodeAt(0)) // Convert each character with its ASCII code.
      .join(" "); // Join the char codes with spaces
  }

  // If the length of the string is divisible by 3.
  if (strin.length % 3 === 0) {
    // If true, reverse the string
    output = strin.split("").reverse().join(""); // Split the string, reverse it, and join it back
  }

  // Check if the length of the input string is divisible by 5
  if (strin.length % 5 === 0) {
    // If true, replace each character with its ASCII code.join them with spaces
    output = strin
      .split("") // Split the string into an array of characters
      .map((element) => element.charCodeAt(0)) // Convert each character to its char code
      .join(" "); // Join the char codes with spaces
  }

  // Return the transformed output
  return output;
}

// EXAMPLE USAGE
console.log(stringTransformation("hello wolrd"));
