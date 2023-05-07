export function currencyFormatter(val: number) {
  let opts: Intl.NumberFormatOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  if (val % 1 === 0) {
    opts = {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    };
  }

  const newFormatter = new Intl.NumberFormat('en-gb', {
    style: 'currency',
    currency: 'GBP',
    ...opts,
  });

  return newFormatter.format(val);
}
