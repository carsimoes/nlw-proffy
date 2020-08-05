import express from 'express';

const app = express();

app.use(express.json());

app.get('/users', (request, response) =>{
    console.log(request.body);

   return response.json("heloowww");
});

//localhost:3333
app.listen(3333);