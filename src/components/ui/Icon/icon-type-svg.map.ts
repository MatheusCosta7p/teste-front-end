import { TUiIconSvgs } from "./icon-svgs.enum";
import { TUiIconTypes } from "./icon-types.enum";

const BASE_URL = "/teste-front-end";

export const uiIconTypeToSvgMap = new Map<TUiIconTypes, TUiIconSvgs>([
  [
    "CreditCard",
    `${BASE_URL}/images/icons/CreditCard.svg`,
  ],
  [
    "ShieldCheck",
    `${BASE_URL}/images/icons/ShieldCheck.svg`,
  ],
  [
    "Truck",
    `${BASE_URL}/images/icons/Truck.svg`,
  ],
  [
    "Group",
    `${BASE_URL}/images/icons/Group.svg`,
  ],
  [
    "Heart",
    `${BASE_URL}/images/icons/Heart.svg`,
  ],
  [
    "UserCircle",
    `${BASE_URL}/images/icons/UserCircle.svg`,
  ],
  [
    "ShoppingCart",
    `${BASE_URL}/images/icons/ShoppingCart.svg`,
  ],
  [
    "MagnifyingGlass",
    `${BASE_URL}/images/icons/MagnifyingGlass.svg`,
  ],
  [
    "CrownSimple",
    `${BASE_URL}/images/icons/CrownSimple.svg`,
  ]
]);
