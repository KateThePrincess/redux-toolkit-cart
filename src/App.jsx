import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';
import { useEffect } from 'react';
import Modal from './components/Modal';

const url = 'https://course-api.com/react-useReducer-cart-project';
function App() {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { show } = useSelector((state) => state.modal);
  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  if (isLoading) {
    return <div className='loading'>loading</div>;
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
      {show && <Modal />}
    </main>
  );
}
export default App;
