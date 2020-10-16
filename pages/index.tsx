import React from "react";
import Head from "next/Head"
import {Card, Row, Col, Button, Layout, Carousel} from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons'

const Home: React.FC = () => {
    return (
        <div>
            <Head>
                <title>ATN | STORE</title>
                <link rel="icon" href={"/favicon.ico"} />
            </Head>
            <Layout.Content>
                <Carousel autoplay>
                    <div>
                        <h3 style={{height: '300px',
                            color: '#fff',
                            lineHeight: '160px',
                            textAlign: 'center',
                            background: '#364d79',}}>1</h3>
                    </div>
                    <div>
                        <h3 style={{height: '300px',
                            color: '#fff',
                            lineHeight: '160px',
                            textAlign: 'center',
                            background: '#364d79',}}>1</h3>
                    </div>
                </Carousel>
                <div className="site-card-wrapper">
                    <Row gutter={[0, 16]} >
                        <Col span={3} offset={2}>
                            <Card
                                actions={[<Button type={"primary"} icon={<ShoppingCartOutlined />} size={"large"}>Add to cart</Button>]}
                                hoverable
                                style={{ width: 300 }}
                                cover={<img alt="example" src="https://img.idesign.vn/w1600/2019/02/11/327983/lego-worlds-listing-thumb-01-ps4-eu-02dec16.png" />}
                            >
                                <h2>Lego Giant</h2>
                                <p>Brand: LV</p>
                                <p>Category: Creative Toy</p>
                                <p>Status: In stock</p>
                                <p>Price: 5$</p>
                            </Card>
                        </Col>
                        <Col span={3} offset={2}>
                            <Card
                                actions={[<Button type={"primary"} icon={<ShoppingCartOutlined />} size={"large"}>Add to cart</Button>]}
                                hoverable
                                style={{ width: 300 }}
                                cover={<img alt="example" src="https://img.idesign.vn/w1600/2019/02/11/327983/lego-worlds-listing-thumb-01-ps4-eu-02dec16.png" />}
                            >
                                <h2>Lego Giant</h2>
                                <p>Brand: LV</p>
                                <p>Category: Creative Toy</p>
                                <p>Status: In stock</p>
                                <p>Price: 5$</p>
                            </Card>
                        </Col>
                        <Col span={3} offset={2}>
                            <Card
                                actions={[<Button type={"primary"} icon={<ShoppingCartOutlined />} size={"large"}>Add to cart</Button>]}
                                hoverable
                                style={{ width: 300 }}
                                cover={<img alt="example" src="https://img.idesign.vn/w1600/2019/02/11/327983/lego-worlds-listing-thumb-01-ps4-eu-02dec16.png" />}
                            >
                                <h2>Lego Giant</h2>
                                <p>Brand: LV</p>
                                <p>Category: Creative Toy</p>
                                <p>Status: In stock</p>
                                <p>Price: 5$</p>
                            </Card>
                        </Col>
                        <Col span={3} offset={2}>
                            <Card
                                actions={[<Button type={"primary"} icon={<ShoppingCartOutlined />} size={"large"}>Add to cart</Button>]}
                                hoverable
                                style={{ width: 300 }}
                                cover={<img alt="example" src="https://img.idesign.vn/w1600/2019/02/11/327983/lego-worlds-listing-thumb-01-ps4-eu-02dec16.png" />}
                            >
                                <h2>Lego Giant</h2>
                                <p>Brand: LV</p>
                                <p>Category: Creative Toy</p>
                                <p>Status: In stock</p>
                                <p>Price: 5$</p>
                            </Card>
                        </Col>
                        <Col span={3} offset={2}>
                            <Card
                                actions={[<Button type={"primary"} icon={<ShoppingCartOutlined />} size={"large"}>Add to cart</Button>]}
                                hoverable
                                style={{ width: 300 }}
                                cover={<img alt="example" src="https://img.idesign.vn/w1600/2019/02/11/327983/lego-worlds-listing-thumb-01-ps4-eu-02dec16.png" />}
                            >
                                <h2>Lego Giant</h2>
                                <p>Brand: LV</p>
                                <p>Category: Creative Toy</p>
                                <p>Status: In stock</p>
                                <p>Price: 5$</p>
                            </Card>
                        </Col>
                        <Col span={3} offset={2}>
                            <Card
                                actions={[<Button type={"primary"} icon={<ShoppingCartOutlined />} size={"large"}>Add to cart</Button>]}
                                hoverable
                                style={{ width: 300 }}
                                cover={<img alt="example" src="https://img.idesign.vn/w1600/2019/02/11/327983/lego-worlds-listing-thumb-01-ps4-eu-02dec16.png" />}
                            >
                                <h2>Lego Giant</h2>
                                <p>Brand: LV</p>
                                <p>Category: Creative Toy</p>
                                <p>Status: In stock</p>
                                <p>Price: 5$</p>
                            </Card>
                        </Col>
                        <Col span={3} offset={2}>
                            <Card
                                actions={[<Button type={"primary"} icon={<ShoppingCartOutlined />} size={"large"}>Add to cart</Button>]}
                                hoverable
                                style={{ width: 300 }}
                                cover={<img alt="example" src="https://img.idesign.vn/w1600/2019/02/11/327983/lego-worlds-listing-thumb-01-ps4-eu-02dec16.png" />}
                            >
                                <h2>Lego Giant</h2>
                                <p>Brand: LV</p>
                                <p>Category: Creative Toy</p>
                                <p>Status: In stock</p>
                                <p>Price: 5$</p>
                            </Card>
                        </Col>
                        <Col span={3} offset={2}>
                            <Card
                                actions={[<Button type={"primary"} icon={<ShoppingCartOutlined />} size={"large"}>Add to cart</Button>]}
                                hoverable
                                style={{ width: 300 }}
                                cover={<img alt="example" src="https://img.idesign.vn/w1600/2019/02/11/327983/lego-worlds-listing-thumb-01-ps4-eu-02dec16.png" />}
                            >
                                <h2>Lego Giant</h2>
                                <p>Brand: LV</p>
                                <p>Category: Creative Toy</p>
                                <p>Status: In stock</p>
                                <p>Price: 5$</p>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Layout.Content>
        </div>
    )
}

export default Home;