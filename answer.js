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

// console.log(getDayType("Friday"));
// console.log(getDayType("friday"));
// console.log(getDayType("MONDAY"));
// console.log(getDayType("Bandarban"));

//Question No. 3

function validateUsername(username) {
  if (username.length < 4) {
    return "Too Short";
  }

  if (username.includes(" ")) {
    return "No Space Allowed";
  }

  if (username.toLowerCase().includes("admin")) {
    return "Reserved Word";
  }

  return "Available";
}
console.log(validateUsername("rahim123"));
console.log(validateUsername("ab"));
console.log(validateUsername("a b"));
console.log(validateUsername("abcd"));
console.log(validateUsername("rahim islam"));
console.log(validateUsername("superadmin99"));
console.log(validateUsername("Admin_Rahim"));