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
// console.log(validateUsername("rahim123"));
// console.log(validateUsername("ab"));
// console.log(validateUsername("a b"));

// console.log(validateUsername("rahim islam"));

//Question No. 4

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  let fare = 50;

  if (distance > 2) {
    fare = fare + (distance - 2) * 15;
  }

  fare = fare + waitingMinutes * 2;

  if (isNight) {
    fare = fare * 1.20;
  }

  return fare;
}
// console.log(getCngFare(2));
// console.log(getCngFare(5, false, 10));
// console.log(getCngFare(5, true));


//Question No. 5
const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;

  if (runsNeeded <= 0) {
    return "Won";
  }

  if (ballsLeft <= 0) {
    return "Lost";
  }

  const requiredRate = (runsNeeded / ballsLeft) * 6;

  let verdict;

  if (requiredRate <= 6) {
    verdict = "Comfortable";
  } else if (requiredRate <= 12) {
    verdict = "Tough";
  } else {
    verdict = "Almost Impossible";
  }

  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};
// console.log(getChaseVerdict(200, 200, 12));
// console.log(getChaseVerdict(200, 190, 0));
