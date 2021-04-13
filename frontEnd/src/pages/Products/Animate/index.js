import * as React from 'react';
import { useState } from 'react';
import { Example } from './Example';
import { Refresh } from './Refresh';
import { ShoppingCartOutlined } from '@ant-design/icons';

import './styles.css';

const Animate = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Refresh onClick={() => setCount(count + 1)} />
      <div className="example-container">
        <Example key={count} />
      </div>
    </>
  );
};

export default Animate;
