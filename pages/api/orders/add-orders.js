import Config from '../../../config/config'

const Orders = (request, response) => {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
    const orders = request.body
    if (orders != null) {
        Config.query('insert into orders (customer_id,store_id,admin_id,created_at,updated_at) values ($1,$2,$3,current_timestamp,current_timestamp);',
            [parseInt(orders.customer_id),parseInt(orders.store_id), parseInt(orders.admin_id)],
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

export default Orders;