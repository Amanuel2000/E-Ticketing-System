import express from "express";
const app = express();



import userRoutes from "./routes/users.js"
import fixtureRoutes from "./routes/fixtures.js"
import ticketRoutes from "./routes/tickets.js"
import paymentRoutes from "./routes/payments.js"
import genTicketRoutes from "./routes/genTickets.js"
import authRoutes from "./routes/auth.js";

import cors from 'cors'
import cookieParser from "cookie-parser"

//middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
}); 
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
  }))
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes)
app.use("/api/fixtures", fixtureRoutes)
app.use("/api/tickets", ticketRoutes)
app.use("/api/payments", paymentRoutes)
app.use("/api/genTickets", genTicketRoutes)


app.listen(8800, () => {
    console.log("API is working")
})




// import { Express } from "express"
// const app = Express();
// import userRoutes from "./routes/users.js"
// const mysql = require("mysql")
 
// const dotenv = require("dotenv");
// const cors = require("cors")

 
// app.use(cors())
// dotenv.config();
// app.use(express.json());


// app.use("/api/test/", userRoutes)

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "test"
// })
// app.get("/", (req, res) => {
//     res.json("Hello this is the backend ")
// })

// app.get('/books', (req, res) => {
//     const q ="SELECT * FROM books"
//     db.query(q, (err, data) => {
//         if (err) return res.json(err)
//         return res.json(data)
//         })
// })

// app.post("/books", (req, res) => {
//     const q = "INSERT INTO books (`title`, `des`, `cover`) VALUES (?)";
//     const values = [
//         req.body.title,
//         req.body.des,
//         req.body.cover,
//     ];
//     db.query(q, [values], (err, data) => {
//         if (err) return res.json(err);
//         return res.json("Book has been created successfully")
//     });
// })

// app.listen(process.env.PORT || 5001, () => {
//     console.log("Backend is Running")
    
// })