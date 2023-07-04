const express = require("express");
const app = express();

const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const fixtureRoute = require("./routes/fixture")
const ticketRoute = require("./routes/ticket")
const paymentRoute = require("./routes/payment")
const genTicketRoute = require("./routes/genTicket")

dotenv.config();

mongoose.connect
    (process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successful"))
    .catch((err) => {
        console.log(err)
    })
app.use(express.json());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/fixtures", fixtureRoute);
app.use("/api/tickets", ticketRoute);
app.use("/api/payments", paymentRoute);
app.use("/api/genTickets",genTicketRoute);


app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running")
})