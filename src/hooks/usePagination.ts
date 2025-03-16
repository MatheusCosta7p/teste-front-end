import { useState, useEffect } from 'react';

export const usePagination = (initialPage: number, itemsPerPage: number, totalItems: number) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [itemsPerPageState, setItemsPerPage] = useState(itemsPerPage);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  useEffect(() => {
    if (windowWidth < 1280) {
      setItemsPerPage(3); 
    } else {
      setItemsPerPage(4); 
    }
  }, [windowWidth]); 

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(Math.ceil(totalItems / itemsPerPageState) - 1, prev + 1));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  return {
    currentPage,
    itemsPerPageState,
    handleNext,
    handlePrev
  };
};
