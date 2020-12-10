
import { getUserItems } from "../services/Items"
import { getItemDetails } from "../services/Items"
import { useContextInfo} from "../hooks/context"
import { Row, Col, Typography, Card, Button, Modal,Divider,Image,Avatar } from 'antd'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
 const { Title, Text } = Typography

function MyItems() {

const [items,setItems]= useState(null)


  useEffect (()=>{
    async function getAnItem() {
    const {data} = await getUserItems()
    setItems(data.items)
    }
    getAnItem()
  },[]
)




   return (
     <div style={{ padding: '1rem 3rem' }}>
       <Title level={1}>Items</Title >
       <Row gutter={[16,24]}>
         {items?.map(item => (
           <Col xs={24} sm={24} md={12} key={item._id}>
             <Card title={item.title} extra={<Link
               to={`/item/${item._id}`}>
               Edit
             </Link>}>
               <p>{item.status}</p>
               <p>{item.description}</p>
               <p>{item.price}</p>
               <p>{item.category}</p>
               <Image src={item.image}/>
             </Card>
           </Col>
         ))}
       </Row>
     </div>
   )
 }
export default MyItems