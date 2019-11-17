const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: '149.28.76.219',
        user: 'root',
        password: '',
        database: 'pos'
    }
});

module.exports = knex
