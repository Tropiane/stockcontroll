import express from 'express';
import mongoose from 'mongoose';

import { ProductRoutes } from './modules/product/product.router';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/stockcontroll').then(() => console.log('Database connected'));

app.use('/api/products', ProductRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});