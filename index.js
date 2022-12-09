const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();
const authRoutes = require('./routes/auth');
const { responseTemplate } = require('./utils/response');

const PORT = process.env.PORT || 80;

const app = express();

app.use(cookieParser());
app.use(bodyParser.json({ limit: "10mb", extented: true }));
// app.use(cors({
//     origin: ['https://localhost:3000'],
//     credentials: true
// }));
app.use(cors());
app.use('/auth', authRoutes)

app.get('/healthcheck', async (req, res) => {
    res.status(200).json(await responseTemplate(true, "Server is running", null, null))
})

const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose.set('strictQuery', true);
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));