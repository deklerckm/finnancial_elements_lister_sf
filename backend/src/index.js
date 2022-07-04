import express from 'express';
import cors from 'cors';
// ROUTERS
import elementsRoutes from './routes/elements.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use('/elements', elementsRoutes);

app.get('/', (req, res) => {
    console.log('TEST');

    res.send('Hello from homepage');
});

app.listen(process.env.SERVER_PORT, () => {
    console.log('Server is running');
})