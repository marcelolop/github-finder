export const truncateText = (text, maxLength) => {
  if (!text) return "Not Available";
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
};
