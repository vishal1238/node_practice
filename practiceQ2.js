import express from "express"
import session from "express-session"
const app = express()
app.use(session({
    secret: 'SecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: true}
}))

//login routes 