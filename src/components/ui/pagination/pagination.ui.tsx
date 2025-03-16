import React from 'react';
import styles from '../../product/productList/productList.module.scss';
import Button from '../button/button.ui';
import { Icon } from '../icon/Icon.ui';

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalItems, itemsPerPage, setCurrentPage }) => {
  const handleNext = () => {
    setCurrentPage((prev) => Math.min(Math.ceil(totalItems / itemsPerPage) - 1, prev + 1));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  return (
    <div className={styles.pagination}>
      <Button variant="outline" onClick={handlePrev} disabled={currentPage === 0}>
        <Icon type="Prev" />
      </Button>
      <Button variant="outline" onClick={handleNext} disabled={currentPage >= Math.ceil(totalItems / itemsPerPage) - 1}>
        <Icon type="Next" />
      </Button>
    </div>
  );
};
