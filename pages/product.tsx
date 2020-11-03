import React, {useEffect, useState} from 'react'
import {Button, Select} from 'antd';
import Head from "next/head";
import {useRouter} from 'next/router'
import Url from '../utils/Url'
//components


const AddProduct: React.FC = (props) => {

    const [name, setName] = useState(null)
    const [price, setPrice] = useState(null)
    const [brand, setBrand] = useState(1)
    const [status, setStatus] = useState(true)
    const [image, setImage] = useState(null)
    const [category, setCategory] = useState(1)
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    const router = useRouter()
    const postProduct = async () => {
        const response = await fetch(`${Url}/api/product/add-product`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                price: price,
                brand: brand,
                status: status,
                image: image,
                category: category
            })
        })
        const res = await response.json()
        return res.status
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
        setBrands(brandData)
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
        setCategories(categoryData)
    }

    const handleCategoryChange = (value) => {
        setCategory(value)
        console.log(value)
    }
    const handleBrandChange = (value) => {
        setBrand(value)
        console.log(value)
    }
    const handlePriceChange = (value) => {
        if(value >= 0) {
            setPrice(value)
        } else {
            setPrice(0)
        }
    }
    useEffect(() => {
        getBrand()
        getCategory()
    }, [])
    return (
        <div className="form-container">
            <Head>
                <title>ATN | ADD PRODUCT</title>
                <link rel="icon" href={"/favicon.ico"}/>
            </Head>
            <div className="login-form-container">
                <div style={{marginLeft: 20, marginTop: 50, marginBottom: 50}}>
                    <text style={{fontSize: 40, fontWeight: "bold"}} className="text-white">Add Product</text>
                </div>
                <div className="input-field-container">
                    <text className="input-field-title">Name</text>
                    <input className='input-field' placeholder="" type="text"
                           onChange={name => setName(name.target.value)}/>
                </div>
                <div className="input-field-container">
                    <text className="input-field-title">Price</text>
                    <input className='input-field' placeholder="" type="number"
                           onChange={price => handlePriceChange(price.target.value)}/>
                </div>
                <div className={"form-select-category"}>
                    <text style={{color: "gray"}}>Category:</text>
                    <Select defaultValue={1} style={{width: "60%", marginLeft: 10}} onChange={handleCategoryChange}>
                        {categories.map(item => {
                            return (
                                <Select.Option value={item.category_id}>{item.category_name}</Select.Option>
                            )
                        })}
                    </Select>
                </div>
                <div className={"form-select-category"}>
                    <text style={{color: "gray"}}>Brand:</text>
                    <Select defaultValue={1} style={{width: "60%", marginLeft: 10}} onChange={handleBrandChange}>
                        {brands.map(item => {
                            return (
                                <Select.Option value={item.brand_id}>{item.brand_name}</Select.Option>
                            )
                        })}
                    </Select>
                </div>
                <div className="input-field-container">
                    <text className="input-field-title">Image link</text>
                    <input className='input-field' placeholder="" type="text"
                           onChange={image => setImage(image.target.value)}/>
                </div>
                <Button onClick={ async () => {
                    if(await postProduct() == "Successful") {
                        await router.push('/')
                    }
                }} className="login-button" type="default" shape="round"
                        size="large">Submit</Button>
            </div>
        </div>
    )
}

export default AddProduct;