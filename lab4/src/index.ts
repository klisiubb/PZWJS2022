import express from "express"
import path from 'path'
import indexController from "./indexController.js"
import flash from 'connect-flash'
import bodyParser from "body-parser"
import cookieParser from 'cookie-parser'
import session from 'express-session'
const app = express()
const router = express.Router()
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(session({
 secret: '2137',
 resave: false,
 saveUninitialized: true,
 cookie: {}
}));
app.use(flash());

app.get('/', indexController.index);



export default app;