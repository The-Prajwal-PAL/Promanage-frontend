const date = new Date();
const day = date.getDate();
const month = date.toLocaleString("default", { month: "short" });
const year = date.getFullYear();
function addSuffixToNumber(number) {
  if (number >= 11 && number <= 13) {
    return number + "th";
  }
  const lastDigit = number % 10;
  switch (lastDigit) {
    case 1:
      return number + "st";
    case 2:
      return number + "nd";
    case 3:
      return number + "rd";
    default:
      return number + "th";
  }
}
const dayWithSuffix = addSuffixToNumber(day);
export const DateToday = `${dayWithSuffix} ${month} ${year}`;
