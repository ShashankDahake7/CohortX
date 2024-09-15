import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth';

const app = express();

app.use(bodyParser.json());

app.use('/api/v1', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});