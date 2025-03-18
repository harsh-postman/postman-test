import express from 'express'
import testRouter from './src/controller/testController.js';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.listen(8000, () => console.log(`I am listening at 8000`))

app.use('/test', testRouter)