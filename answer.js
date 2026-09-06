//Question No. 1
function describeValue(value) {
  let type = typeof value;
  let result;

  if (value) {
    result = "truthy";
  } else {
    result = "falsy";
  }

  return type + " | " + result;
}

console.log(describeValue("hello"));
console.log(describeValue(0));
console.log(describeValue(null));
console.log(describeValue(NaN));