import Config from "../../../config/config";

const OrdersRetail = (request, response) => {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
    const orderId = request.query.orderId
    Config.query('select store.store_name, product.product_id, customer.customer_name , admin.admin_name , orders.created_at , product.product_name , product.product_price , ordersdetail.quantity from orders inner join ordersdetail on orders.orders_id = ordersdetail.orders_id inner join product on product.product_id = ordersdetail.product_id inner join admin on admin.admin_id = orders.admin_id inner join store on store.admin_id = admin.admin_id inner join customer on customer.customer_id = orders.customer_id where orders.orders_id = $1;', [orderId], (err, res) => {
        if (err) {
            console.log(err)
        }else {
            response.status(200)
            response.send(res.rows)
        }
    })
}

export default OrdersRetail;