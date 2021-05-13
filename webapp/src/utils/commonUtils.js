export function formatNumber(num, type, positiveSign = false) {
  const prefix = num && num < 0 ? '-' : ((positiveSign && num && '+') || '');
  const numberText = Math.abs(num).toFixed(2).toLocaleString('en-US').replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  switch (type) {
    case '%':
      return prefix + numberText + type;
    case '$':
      return prefix + type + numberText;
    default:
      return prefix + numberText;
  }
}

export default formatNumber;
