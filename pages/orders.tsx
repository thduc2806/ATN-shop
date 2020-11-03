import React, {useState, useEffect} from "react";
import {Card, Col, Row, Button} from 'antd';
import {useRouter} from "next/router";
import Url from '../utils/Url'


const Orders: React.FC = () => {
    const router = useRouter()
    const [order, setOrder] = useState([])
    const getOrder = async () => {
        const response = await fetch(`${Url}/api/orders/get-orders`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const ordersData = await response.json()
        setOrder(ordersData)
        console.log(ordersData)
    }
    useEffect(() => {
        getOrder()
    }, [])

    const gotoDetail = async (id) => {
        await router.push(`/order-detail/${id}`)
    }

    return (
        <div className="site-card-wrapper">
            <Row gutter={16}>
                <Col span={8}>
                    {order.map(item => {
                        return (
                            <Card actions={[<Button onClick={() => gotoDetail(item.orders_id)} type="primary" style={{width: '80%'}}>View Details</Button>]}
                                  title={`Customer Name: ${item.customer_name}`}
                                  bordered={false}>
                                <p>Order ID: {item.orders_id}</p>
                                <p>Store Name: {item.store_name}</p>
                                <p>Staff Name: {item.admin_name}</p>
                                <p>Order Date: {item.created_at}</p>
                            </Card>
                        )
                    })
                    }
                </Col>
            </Row>
        </div>
    )
}
export default Orders;