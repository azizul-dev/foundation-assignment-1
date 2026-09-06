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

// console.log(describeValue("hello"));
// console.log(describeValue(0));
// console.log(describeValue(null));
// console.log(describeValue(NaN));

//Question No. 2
function getDayType(day) {
  day = day.toLowerCase();

  switch (day) {
    case "friday":
    case "saturday":
      return "Weekend";

    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";

    default:
      return "Invalid Day";
  }
}

console.log(getDayType("Friday"));
console.log(getDayType("friday"));
console.log(getDayType("MONDAY"));
console.log(getDayType("Bandarban"));