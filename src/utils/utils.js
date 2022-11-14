export const dateFilter = (businessDate, toDate, fromDate) => {
  const st = businessDate;
  const pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
  const dt = new Date(st.replace(pattern, "$3-$2-$1"));
  return (
    (fromDate
      ? new Date(dt).getTime() >= new Date(fromDate).getTime()
      : true) &&
    (toDate ? new Date(dt).getTime() <= new Date(toDate).getTime() : true)
  );
};
