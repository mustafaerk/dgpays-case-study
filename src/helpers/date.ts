export function formatDate(inputDate: Date) {
  let date, month, year;

  date = inputDate.getDate();
  month = inputDate.getMonth() + 1;
  year = inputDate.getFullYear();

  date = date.toString().padStart(2, '0');

  month = month.toString().padStart(2, '0');

  return `${date}/${month}/${year}`;
}

export function calculateDateDiff(startDate: string, endDate: string) {
  return Math.floor(
    (Date.parse(startDate.replace(/-/g, '/')) - Date.parse(endDate.replace(/-/g, '/'))) / 86400000
  );
}
