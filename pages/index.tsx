import React, {useState, useEffect} from "react";
import Head from "next/head"
import {Card, Row, Col, Button, Layout, Carousel} from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons'
import fetch from 'node-fetch'
import Url from '../utils/Url'

const Home: React.FC = () => {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        const response = await fetch(`${Url}/api/product/get-product`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const productData = await response.json()
        await setProducts(productData)
    }
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <div>
            <Head>
                <title>ATN | STORE</title>
                <link rel="icon" href={"/favicon.ico"}/>
            </Head>
            <Layout.Content>
                <Carousel autoplay>
                    <div>
                        <h3 style={{
                            height: '300px',
                            color: '#fff',
                            lineHeight: '160px',
                            textAlign: 'center',
                            background: '#364d79',
                        }}>1</h3>
                    </div>
                    <div>
                        <h3 style={{
                            height: '300px',
                            color: '#fff',
                            lineHeight: '160px',
                            textAlign: 'center',
                            background: '#364d79',
                        }}>1</h3>
                    </div>
                </Carousel>
                <div className="site-card-wrapper">
                    <Row gutter={[0, 16]}>
                        {products.map(item => {
                            return (
                                <Col span={3} offset={2} key={item.product_id} >
                                    <Card
                                        actions={[<Button type={"primary"} icon={<ShoppingCartOutlined/>}
                                                          size={"large"}>Add to
                                            cart</Button>]}
                                        hoverable
                                        style={{width: 300}}
                                        cover={<img alt="example"
                                                    src={item.product_image}/>}
                                    >
                                        <h2>{item.product_name}</h2>
                                        <p>Brand: {item.brand_id}</p>
                                        <p>Category: {item.category_id}</p>
                                        <p>Status: {item.product_status}</p>
                                        <p>Price: {item.product_price}$</p>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </Layout.Content>
        </div>
    )
}

export default Home;