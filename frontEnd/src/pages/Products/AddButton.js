import { useCart } from 'react-use-cart';
import { Button } from 'antd';
const AddButton = ({ product }) => {
  const { addItem } = useCart();

  return (
    <>
      <Button
        type="dashed"
        ghost
        style={{ color: '#9e1068' }}
        onClick={() => addItem(product)}
      >
        Add to cart
      </Button>
    </>
  );
};

export default AddButton;
