export const price = (value: number | null): string => {
  if (value === null || value === undefined) {
    return '—'; // 'Free', 'N/A'
  }
  return value
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    .concat(' $');
};
