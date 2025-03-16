import { useState } from 'react';

const useQuantity = (initialQuantity: number) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return {
    quantity,
    increaseQuantity,
    decreaseQuantity
  };
};

export default useQuantity;
