require('dotenv').config({ path: `${process.cwd()}/.env` });
const express = require("express");
const cors = require("cors");
const Connection = require('./DB/Connection');
const cookieParser = require('cookie-parser');
const userRoute = require('./Routes/userRoute');
const companyRoute = require('./Routes/companyRoute');
const jobRoute = require('./Routes/jobRoute');
const applicationRoute = require('./Routes/applicationRoute');


const port = process.env.APP_PORT || 5000;

const app = express();
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
}

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

// DB_connection
Connection();

// routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);


app.get("/", (req, res) => {
    res.status(404).send({ message: "Hello from Job portal." })
});

app.use((req, res) => {
    res.status(404).send({ message: "No route found." });
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});