import express, { response } from 'express';
import { request } from 'http';

const routes = express.Router();


routes.get('/', (request, response) => {
    return response.json({message: 'bom dia!'});
});


export default routes;
