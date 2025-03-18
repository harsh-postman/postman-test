import { Router } from "express"

const testRouter = Router()

testRouter.get('/', (req, res) => {
    res.send('Hello World').status(200);
})

testRouter.post('/', (req, res) => {
    for (let key in req.body) {
        console.log(key, req.body[key]);
    }
    res.send(req.body).status(200);
    // res.send(req.params).status(200);
});

testRouter.delete('/:id', (req, res) => {
    res.send(`${req.params.id} deleted`).status(200);
});

export default testRouter;
