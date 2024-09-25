const express = require('express');
const dotenv = require('dotenv');
const connectDatabase = require('./config/connectDatabase');
const path = require('path');
const app = express();
const cors = require('cors');
const products = require('./routes/product');
const order = require('./routes/order');
dotenv.config({path: path.join(__dirname,'config', 'config.env')});
app.use(express.json());
app.use(cors());
connectDatabase();
app.use('/api/v1',products);
app.use('/api/v1',order);

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})