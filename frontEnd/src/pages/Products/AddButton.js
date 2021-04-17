import { useCart } from 'react-use-cart';
import { Button } from 'antd';
import { message } from 'antd';

const AddButton = ({ product }) => {
  const { addItem } = useCart();

  const success = (product) => {
    message.success({
      content: ` ${product.name} added to cart`,
      className: 'custom-class',
      style: {
        color: '#eb2f96',
      },
    });
  };

  return (
    <>
      <Button
        type="dashed"
        ghost
        style={{ color: '#9e1068' }}
        onClick={() => {
          addItem(product);
          success(product);
        }}
      >
        Add to cart
      </Button>
    </>
  );
};

export default AddButton;
