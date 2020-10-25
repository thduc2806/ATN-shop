import Config from "../../../config/config";

const Orders = (request, response) => {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
    Config.query('select admin.admin_name, customer.customer_name, store.store_name, orders.orders_id, orders.created_at from orders inner join admin on orders.admin_id = admin.admin_id inner join store on store.admin_id = admin.admin_id inner join customer on customer.customer_id = orders.customer_id;', (err, res) => {
        if (err) {
            console.log(err)
        }else {
            response.status(200)
            response.send(res.rows)
        }
    })
}

export default Orders;