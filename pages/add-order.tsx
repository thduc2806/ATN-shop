import React, {useEffect, useState} from 'react'
import {List, Button, Form, Select, InputNumber} from 'antd';
import {useRouter} from 'next/router'
import Url from '../utils/Url'


const AddOrders: React.FC = () => {

    const [product, setProduct] = useState([])
    const [brand, setBrand] = useState([])
    const [category, setCategory] = useState([])
    const [orderList, setOrderList] = useState([])
    const [position, setPosition] = useState(0)

    const router = useRouter()

    const postOrder = async () => {
        if (orderList != undefined) {
            await fetch(`${Url}/api/orders/add-orders`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    customer_id: 1,
                    store_id: 1,
                    admin_id: 1
                })
            })
            await orderList.map(async item => {
                if (item.product != undefined && item.brand != undefined && item.category != undefined && item.quantity != undefined) {
                    await  fetch(`${Url}/api/orders/add-orders-detail`, {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            orders_id: position,
                            product_id: item.product,
                            quantity: item.quantity,
                        })
                    })
                }
            })
        } else {
            console.log("Failed")
        }
    }


    const getProduct = async () => {
        const response = await fetch(`${Url}/api/product/get-product`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const productData = await response.json()
        setProduct(productData)
    }

    const getBrand = async () => {
        const response = await fetch(`${Url}/api/brand/get-brand`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const brandData = await response.json()
        setBrand((brandData))
    }

    const getCategory = async () => {
        const response = await fetch(`${Url}/api/category/get-category`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const categoryData = await response.json()
        setCategory(categoryData)
    }

    const getPosition = async () => {
        const response = await fetch(`${Url}/api/orders/get-orders`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const positionData = await response.json()
        let number = positionData.length + 1
        await setPosition(number)
    }

    const handleProductOnChange = (value) => {
        // console.log(value)
    }

    const handleBrandOnChange = (value) => {
        // console.log(value)
    }

    const handleCategoryOnChange = (value) => {
        // console.log(value)
    }


    useEffect(() => {
        getPosition()
        getProduct()
        getBrand()
        getCategory()
    }, [])

    const onFinish = values => {
        setOrderList(prev => [...prev, values])
    }
    return (
        <div style={{minHeight: "68vh"}}>
            <List
                className="demo-loadmore-list"
                itemLayout="horizontal"
                dataSource={orderList}
                renderItem={item => (
                    <List.Item
                        style={{padding: '20px'}}
                        actions={[
                            <h5>{item.quantity * parseFloat(product.find(element => element.product_id == item.product).product_price)}</h5>]}
                    >
                        <List.Item.Meta
                            avatar={
                                <img src={product.find(element => element.product_id == item.product).product_image}
                                     style={{height: '70px', width: '70px'}}/>
                            }
                            title={<h4>{product.find(element => element.product_id == item.product).product_name}</h4>}
                            description={<h5>Product
                                price: {product.find(element => element.product_id == item.product).product_price}</h5>}
                        />
                        <h5>Quantity: {item.quantity}</h5>
                    </List.Item>
                )}
            />
            <div>
                <Form name="horizontal_login" layout="inline" onFinish={onFinish}>
                    <Form.Item
                        name="product"
                        rules={[{required: true, message: 'Please type the product -_-!'}]}
                    >
                        <Select placeholder="product" style={{width: 300, marginLeft: 10}}
                                onChange={handleProductOnChange}>
                            {product.map(item => {
                                return (
                                    <Select.Option value={item.product_id}>{item.product_name}</Select.Option>
                                )
                            })}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="brand"
                        rules={[{required: true, message: 'Please choose brand -_-!'}]}
                    >
                        <Select placeholder="brand" style={{width: 100, marginLeft: 10}}
                                onChange={handleBrandOnChange}>
                            {brand.map(item => {
                                return (
                                    <Select.Option value={item.brand_id}>{item.brand_name}</Select.Option>
                                )
                            })}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="category"
                        rules={[{required: true, message: 'Please choose category -_-!'}]}
                    >
                        <Select placeholder="category" style={{width: 100, marginLeft: 10}}
                                onChange={handleCategoryOnChange}>
                            {category.map(item => {
                                return (
                                    <Select.Option value={item.category_id}>{item.category_name}</Select.Option>
                                )
                            })}
                        </Select>
                    </Form.Item>
                    <Form.Item name="quantity"
                               rules={[{required: true, message: 'Please input your quantity -_-!'}]}>
                        <InputNumber type="number" placeholder="Quantity"/>
                    </Form.Item>
                    <Form.Item shouldUpdate={true}>{() => (
                        <Button type="primary" htmlType="submit">Add</Button>)}</Form.Item>
                    <Form.Item shouldUpdate={true}>{() => (
                        <Button type="default" onClick={async () => {
                            await postOrder()
                            // await router.push('/orders')
                        }}>Done</Button>)}
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}


export default AddOrders;