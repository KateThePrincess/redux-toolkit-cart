import { useEffect } from 'react';
import { CartIcon } from '../icons';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);

  return (
    <nav>
      <div className='nav-center'>
        <h3>
          redux
          <span style={{ color: 'var(--black)' }}>Cart</span>
        </h3>
        <div className='nav-container'>
          <CartIcon />
          <div
            className='amount-container'
            style={{ opacity: `${amount === 0 ? '0' : '1'}` }}
          >
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
