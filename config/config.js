import {Client} from 'pg';

const Config = new Client({
    user: "bwljchfwuqsxbx",
    password: "3832395121d458ad2bd607e5e477ca4bffebf992a6d6e1e2a6261c940fed5554",
    database: "d289ofnsp83pif",
    port: 5432,
    host: "ec2-52-206-15-227.compute-1.amazonaws.com",
    ssl: true,
    requestCert: true,
    agent: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
});

Config.connect()

export default Config;