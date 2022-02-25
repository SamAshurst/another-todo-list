const calcDaysLeft = (taskDate) => {
  const date = new Date(taskDate);
  const milliseconds = date.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const diffInTime = milliseconds - Date.now();
  const diffInDays = Math.round(diffInTime / oneDay);
  return diffInDays;
};

export default calcDaysLeft;
