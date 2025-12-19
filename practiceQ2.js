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
app.get("/login", (req, res) => {
    req.session.username = "Vishal",
    res.send("session is created")
})

//dashboard
app.get("/dashboard", (req, res)=>{
    if(!req.session.username){
        return res.send ("access is denied")
    }
    res.send(`Welcome to dashboard ${req.session.username}`)
})

//