import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, increase, decrease } from '../features/cart/cartSlice';
import { Minus, Plus, Remove } from '../icons';
const CartItem = ({ id, img, title, price, amount }) => {
  const [showClose, setShowClose] = useState(false);
  const dispatch = useDispatch();

  return (
    <article
      className='cart-item'
      onMouseOver={() => setShowClose(true)}
      onMouseLeave={() => setShowClose(false)}
    >
      <div style={{ position: 'relative' }}>
        <img src={img} alt={title} />
      </div>
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>

        <button
          className='remove-btn'
          style={
            showClose
              ? {
                  opacity: 1,
                  transform: 'translateX(0)',
                  visibility: 'visible',
                }
              : {
                  opacity: 0,
                  transform: 'translateX(-50%)',
                  visibility: 'hidden',
                }
          }
          onClick={() => dispatch(removeItem(id))}
        >
          remove
        </button>
      </div>
      <div className='amount-control'>
        <button
          className='amount-btn'
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          <Minus />
        </button>
        <p className='amount'>{amount}</p>
        <button
          className='amount-btn'
          //curly brackets because we have destructured payload earlier
          onClick={() => dispatch(increase({ id }))}
        >
          <Plus />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
