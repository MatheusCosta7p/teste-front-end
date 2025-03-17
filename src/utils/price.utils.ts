export const formatPriceToBRL = (value: number) => {
  return new Intl.NumberFormat("pt-BR").format(value);
};
