import  express  from "express";
const app=express();
import cookieParser from "cookie-parser"
import cors from "cors";

app.use(express.json({
    limit:"16kb"
}));

app.use(express.urlencoded());
app.use(express.static("public"));
app.use(cookieParser());

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use()
export {app}