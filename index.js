import express from 'express';
import cors from 'cors';
import server from 'http';
import {v4 as uuidV4} from 'uuid';

const app =express();
const serve = server.Server(app);

const port = process.env.port || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/join',(req,res)=>{
    res.send({link: uuidV4()})
})

serve.listen(port,()=>{
    console.log(`Listening on port ${port}`);
}).on(error=>{
    console.log('Error: ',error)
})