import express, { response } from 'express';

const app = express();

app.use(express.json());


app.get('/users', (request, response) => {
    const users = [
        {name: 'João', age: 24},
        {name: 'Guilherme', age: 50},
        {name: 'Gabriel', age: 22},
        {name: 'Gustavo', age: 22},
    ];

    return response.json(users);
});


app.listen(3333);


//Acesso em localhost:3333