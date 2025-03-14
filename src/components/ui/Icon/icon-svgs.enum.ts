const BASE_URL = import.meta.env.BASE_URL || '/';

export const UiIconSvgs = [
  `${BASE_URL}images/icons/CreditCard.svg`,
  `${BASE_URL}images/icons/Truck.svg`,
  `${BASE_URL}images/icons/ShieldCheck.svg`,
  `${BASE_URL}images/icons/Group.svg`,
  `${BASE_URL}images/icons/Heart.svg`,
  `${BASE_URL}images/icons/UserCircle.svg`,
  `${BASE_URL}images/icons/ShoppingCart.svg`,
  `${BASE_URL}images/icons/MagnifyingGlass.svg`,
  `${BASE_URL}images/icons/CrownSimple.svg`
] as const;
export type TUiIconSvgs = (typeof UiIconSvgs)[number];
