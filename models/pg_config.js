const Pool = require('pg').Pool;
const pg_conn = new Pool (
    {
        user:'aqstbybsvurxxc',
        password:'87da98c725b01a485d975c60e3d21a29f1592909b6615d98962ce9b50d54ba76',
        host:'ec2-35-170-21-76.compute-1.amazonaws.com',
        database:'d1i55iaapntstf',
        port:5432,
        ssl: {
            rejectUnauthorized: false
        },
    }
);
module.exports = pg_conn;


