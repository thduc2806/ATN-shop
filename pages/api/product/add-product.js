import Config from '../../../config/config'

const Product = (request, response) => {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
    const product = request.body
    if (product != null) {
        Config.query('insert into product'
            + '(product_name,product_price,product_status,product_image,brand_id,category_id,created_at,updated_at)'
            + 'values ($1, $2, $3, $4, $5, $6, current_timestamp, current_timestamp);',
            [product.name, product.price, product.status, product.image, product.brand, product.category],
            (err, res) => {
                if (err) {
                    console.log(err)
                } else {
                    response.send({status: "Successful"})
                }
            })
    } else {
        response.send({status: "Fail"})
    }
}

export default Product;
