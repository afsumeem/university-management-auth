import express, { Application, Response, Request } from "express";
import cors from 'cors';

const app: Application = express()

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }))


//testing purpose 
app.get('/', (req: Request, res: Response) => {
    res.send('working successfully')
})

export default app;