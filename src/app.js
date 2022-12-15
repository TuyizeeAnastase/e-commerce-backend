import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import routes from "./routers/index";
import fileupload from "express-fileupload";
import cloadinary from 'cloudinary'

dotenv.config();

const app = express();
const PORT = process.env.PORT;
cloadinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
    secure:true
})

app.use(fileupload({ useTempFiles: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("tiny"));
app.use(cors());
app.use(routes);

app.listen(PORT , console.log(`Server Listening on ${PORT}`));

export default app;
