import React, {useState, useEffect} from "react";
import {Card, Table} from 'antd';
import {useRouter} from "next/router";
import Url from '../../utils/Url'

const OrdersDetail: React.FC = () => {
    const router = useRouter()
    const [ordersDetail, setOrdersDetail] = useState([])
    const [total, setTotal] = useState(0)
    const getOrdersDetail = async (id) => {
        const response = await fetch(`${Url}/api/orders/get-orders-detail?orderId=${id}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const ordersDetailData = await response.json()
        await setOrdersDetail(ordersDetailData)
        await setTotal(countTotal(ordersDetailData))
    }
    useEffect(() => {
        getOrdersDetail(router.query.id)
    }, [router.query.id])

    const columns = [
        {
            title: 'Product Name',
            dataIndex: 'product_name',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
        },
        {
            title: 'Price',
            dataIndex: 'product_price',
        },
    ];

    const countTotal = (data) => {
        let sum = 0
        data.map(item => {
            // setTotal(total + parseInt(item.product_price) * parseInt(item.quantity))
            sum += item.product_price * item.quantity
            console.log(sum)
        })
        return sum
    }

    return (
        <div>
            <Table
                columns={columns}
                dataSource={ordersDetail}
                size="middle"
                summary={() => (
                    <Table.Summary.Row>
                        <Table.Summary.Cell index={0}>Total: {total}$</Table.Summary.Cell>
                    </Table.Summary.Row>
                )}
            />
        </div>

    )
}

export default OrdersDetail;