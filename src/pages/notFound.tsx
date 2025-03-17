import React from 'react';
import { Link } from 'react-router';

const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <h1>404 - página não encontrada</h1>
      <Link to="/teste-front-end">Volte para a Home</Link>
    </div>
  );
};

export default NotFound;
