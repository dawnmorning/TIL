export const getStringDate = (date) => {
  // yyyy-mm-dd-블라블라 를 0부터 9까지만 자른 것
  return date.toISOString().slice(0, 10);
};
