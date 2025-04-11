import express from 'express';
import { init } from './routes.js';

const app = express()


init(express , app);

const PORT = 4000 ;

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})