const { format, compareAsc, addDays } = require("date-fns");

const date = new Date();
console.log(date);

const formattedDate = format(date, "MM/dd/yyyy");
// Used to format the date in a specific way
console.log("Today's date -", formattedDate);

const dates = [
  format(new Date(1995, 6, 2), "MM/dd/yyyy"),
  format(new Date(1987, 1, 11), "MM/dd/yyyy"),
  format(new Date(1989, 6, 10), "MM/dd/yyyy"),
];
// Used to compare dates in ascending order
dates.sort(compareAsc);
console.log("Dates in ascending order:", dates);

// Add the specified number of days to the given date.
console.log("After 1 week:", format(addDays(date, 7), "MM/dd/yyyy"));