import { useCart } from 'react-use-cart';
import { Button } from 'antd';
import {
  MinusCircleTwoTone,
  PlusCircleTwoTone,
  DeleteTwoTone,
} from '@ant-design/icons';
const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <>
      <h1>({totalUniqueItems}) diferent items</h1>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.quantity} x {item.name}
            <br />
            <Button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              <MinusCircleTwoTone />
            </Button>
            <Button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              <PlusCircleTwoTone />
            </Button>
            <Button onClick={() => removeItem(item.id)}>
              <DeleteTwoTone />
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
