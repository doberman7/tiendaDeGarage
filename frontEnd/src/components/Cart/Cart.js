import { useCart } from 'react-use-cart';
import { Button, Image, List, Typography, Divider } from 'antd';
import {
  MinusCircleTwoTone,
  PlusCircleTwoTone,
  DeleteTwoTone,
} from '@ant-design/icons';
const Cart = () => {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <>
      <h1>({totalUniqueItems}) diferent items</h1>
      <List
        size="small"
        // bordered
        dataSource={items}
        renderItem={(item) => (
          <List.Item>
            <Image width={35} src={item.image[0]} />({item.quantity}){' '}
            {item.name}
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
          </List.Item>
        )}
      />
    </>
  );
};

export default Cart;
