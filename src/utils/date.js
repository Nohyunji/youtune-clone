export const formatDate = (date) => {
  let newDate = new Date(date);
  let Year = newDate.getFullYear();
  let Month = newDate.getMonth();
  let Day = newDate.getDate();

  return `${Year}.${Month}.${Day}`;
};
