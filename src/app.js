import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from "body-parser";
import morgan from "morgan";
import routes from './routers/index'

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan("tiny"));
app.use(cors());
app.use(routes)

app.listen(PORT,console.log(`Server Listening on ${PORT}`));

export default app