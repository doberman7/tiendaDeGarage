import React from 'react';
import { Card, Avatar, Typography } from 'antd';
import { Link } from 'react-router-dom';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import CreateItemForm from '../pages/CreateItem';

const { Meta } = Card;
const { Title } = Typography;

function ItemCard({ title, description, price, image, _id, categorys, status }) {
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title={title}
        description="description"
        status="status"
      />
    </Card>
  );
}
export default ItemCard;
