import React, { useContext } from 'react'
import CartContext from '../../../context/CartContext';
import './buttonDeleted2.scss';

const ButtonDeleted2 = (id) => {
  const { removeItem } = useContext(CartContext);

    const handleRemove = () => {
      removeItem(id);
    };

  return (
    <div className='btn-deleted-2'>
      <i onClick={handleRemove} className="fa-sharp fa-solid fa-trash"></i>
    </div>
  )
}

export default ButtonDeleted2