const formatDate = (date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};
const ISOConvert = (dateString) => {
  const dateObject = new Date(dateString);
  return dateObject.toISOString();
};

export { ISOConvert, formatDate };
