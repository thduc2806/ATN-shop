import Config from "../../../config/config";

const Brand = (request, response) => {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
    Config.query('select * from brand;', (err, res) => {
        if (err) {
            console.log(err)
        }else {
            response.status(200)
            response.send(res.rows)
        }
    })
}

export default Brand;