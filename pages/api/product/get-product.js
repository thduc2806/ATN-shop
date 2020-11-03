import Config from '../../../config/config'

export const config = {
    api: {
        bodyParser: false,
    },
}


const Product = (request, response) => {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
    Config.query('select * from product;', (err, res) => {
        if (err) {
            console.log(err)
        } else {
            response.status(200)
            response.send(res.rows)
        }
    })
}

export default Product;