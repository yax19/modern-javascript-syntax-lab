function describeNoun(noun = 'cat', adjective = 'orange') {
  console.log(`The ${noun} is ${adjective}.`);
}

describeNoun(); // Uses default values
describeNoun('dog', 'brown'); // Uses provided values
