export function formatPrice(price: number): string {
  return price.toLocaleString('ru', {
    style: 'currency',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
    currency: 'RUB',
  });
}
export default formatPrice;
