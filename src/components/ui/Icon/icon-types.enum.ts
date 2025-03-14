export const UiIconTypes = [
  "CreditCard",
  "ShieldCheck",
  "Truck",
  "Expand",
  "Heart",
  "UserCircle",
  "ShoppingCart",
  "MagnifyingGlass",
  "CrownSimple"
] as const;
export type TUiIconTypes = (typeof UiIconTypes)[number];
