import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import deliveryServiceRoute from './routes/delivery_service.route';

const app = express();

const PORT = process.env.PORT ||6677;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello');
});

app.use('/api/v1', deliveryServiceRoute);

app.listen(PORT, () => {
    console.log(`The server is running on PORT ${PORT}`);
})