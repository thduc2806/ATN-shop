import Config from '../../../config/config'

const ordersDetail = (request, response) => {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
    const ordersDetail = request.body
    if (ordersDetail != null) {
        Config.query('insert into ordersdetail (orders_id,product_id,quantity,created_at,updated_at) values ($1,$2,$3,current_timestamp,current_timestamp);',
            [ordersDetail.orders_id, ordersDetail.product_id, ordersDetail.quantity],
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

export default ordersDetail;