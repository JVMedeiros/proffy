import express, { response } from 'express';

const app = express();

app.use(express.json());


app.get('/', (request, response) => {
    return response.json({message: 'SALVE SALVE!'});
});


app.listen(3333);


//Acesso em localhost:3333