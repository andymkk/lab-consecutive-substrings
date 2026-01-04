function consecutiveSubstrings(string) {
  // type your code here
  const result = [];
  
  // Outer loop: starting index for each substring
  for (let start = 0; start < string.length; start++) {
    // Inner loop: ending index for each substring starting at 'start'
    for (let end = start + 1; end <= string.length; end++) {
      // Extract consecutive substring from start to end-1
      result.push(string.substring(start, end));
    }
  }
  
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
  
  console.log("");
  
  console.log("Test 3 - Empty string:");
  console.log("Expecting: []");
  console.log("=>", consecutiveSubstrings(''));
  
  console.log("");
  
  console.log("Test 4 - 'phone':");
  console.log("Expecting: ['p','ph','pho','phon','phone','h','ho','hon','hone','o','on','one','n','ne','e']");
  console.log("=>", consecutiveSubstrings('phone'));
  
  console.log("");
  
  console.log("Test 5 - 'ab':");
  console.log("Expecting: ['a', 'ab', 'b']");
  console.log("=>", consecutiveSubstrings('ab'));
}
module.exports = consecutiveSubstrings;