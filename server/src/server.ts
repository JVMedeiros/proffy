import express, { response } from 'express';

const app = express();

app.get('/users', (request, response) => {
    return response.json('hello world');
})


app.listen(3333);


//Acesso em localhost:3333