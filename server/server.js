require('dotenv').config()
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const app = express();
const router = require('./router/index');

app.use(express.json());
app.use(cors({ credentials: true, origin: process.env.USER_URL }));
app.use('/api', router)


const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`))
    }catch(e){
        console.log(e)
    }
}

start();