export const formatPrice = (price: number): string => {
  return `R$ ${(price / 100).toFixed(2).replace('.', ',')}`;
};


export const getDiscountedPrice = (price: number, discount: number = 0): number => {
  return price - (price * discount); 
};


export const getInstallments = (price: number, installments: number = 1): string => {
  const installmentValue = (price / installments / 100).toFixed(2).replace('.', ',');
  return `Ou em ${installments}x de R$ ${installmentValue} sem juros`;
};
