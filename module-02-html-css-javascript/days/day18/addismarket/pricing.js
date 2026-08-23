export const withvat = (price) => {
  return price * 1.15;
};

export const format = (amount) => {
  return `${amount.toFixed(2)} ETB`;
};
