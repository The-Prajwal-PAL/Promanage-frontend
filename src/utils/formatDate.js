function getFormattedDate(dateString) {
  const dateObject = new Date(dateString);
  const day = dateObject.getDate();
  const options = { month: "short", timeZone: "UTC" };

  let daySuffix = "th";
  if (day === 1 || day === 21 || day === 31) {
    daySuffix = "st";
  } else if (day === 2 || day === 22) {
    daySuffix = "nd";
  } else if (day === 3 || day === 23) {
    daySuffix = "rd";
  }

  const formattedDate = dateObject.toLocaleDateString("en-US", options);
  return `${formattedDate} ${day}${daySuffix}`;
}
export { getFormattedDate };
