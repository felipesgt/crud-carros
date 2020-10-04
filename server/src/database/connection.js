import knex from 'knex';
import configuration from '../../knexfile.js'
const config = configuration.development;
const connection = knex(config);



export default connection;