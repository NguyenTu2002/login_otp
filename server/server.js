import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/connect.js';
//
const app = express();
//
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');
//
const port = 8080;
//
app.get('/', (req, res) => {
    res.status(201).json("Oke Babe");
});
//
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Connet to server Port :${port}`)
        })
    } catch (error) {
        console.log('Cannot connect to database');
    }
}).catch(error => {
    console.log('Invalid database connection');
})
//

