export const UiIconTypes = [
  "CreditCard",
  "ShieldCheck",
  "Truck",
  "Expand",
  "Heart",
  "UserCircle",
  "ShoppingCart",
  "MagnifyingGlass",
  "CrownSimple",
  "Device",
  "Fashion",
  "Health",
  "Market",
  "Run",
  "Tools",
  "Whiskey",
  "Prev",
  "Next",
  "Minus",
  "Plus"
] as const;
export type TUiIconTypes = (typeof UiIconTypes)[number];
