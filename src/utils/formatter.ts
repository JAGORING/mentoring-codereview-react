export const addCommasToNumber = (number: number): string => {
  let numString: string = number.toString();

  let parts: string[] = numString.split('.');
  let integerPart: string = parts[0];
  let decimalPart: string = parts.length > 1 ? '.' + parts[1] : '';

  let formattedInteger: string = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return formattedInteger + decimalPart;
};
