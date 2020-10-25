import {Client} from 'pg';

const Config = new Client({
    user: "fxfvtisvufysuq",
    password: "ff251211bae2bbfaa7237e870781413ef30978efa62b0c49e946cf106b8db8e8",
    database: "d6mjrsea7ov2a2",
    port: 5432,
    host: "ec2-75-101-232-85.compute-1.amazonaws.com",
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