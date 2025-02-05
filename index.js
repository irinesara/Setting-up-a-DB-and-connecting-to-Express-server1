const express = require('express');
const { connectDB } = require('./db');

const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.listen(PORT, async () => {
    try {
        await connectDB(MONGO_URI);
        console.log(`Server running on port ${PORT}`);
    } 
    catch (error) { 
        console.error(error);
    }
}); 


app.get('/', (req, res) => {
    res.send('Hello World');
});
