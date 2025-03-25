import { config } from 'dotenv';
config();
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import morgan from 'morgan';
import errorMiddleware from './middleware/errorMiddleware.js';

//import routes
import leadRoutes from './routes/leadRoutes.js';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors(                //this allows us to make requests from the frontend to the backend
//     {
//         origin: 'https://marketingexl-client.onrender.com',   //this is the URL of the frontend. * means all URLs are allowed to make requests to the backend
//         credentials: true
//     }
// ));    

const allowedOrigins = [
  "https://marketingexl-client.onrender.com",  // OLD frontend
  "https://marketingexl.com"                   // NEW frontend
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

// const multer  = require('multer');
// const upload = multer();
// app.use(upload.array());
app.use(multer().array());
app.use(morgan('dev'));

app.use('/ping', (req, res) => {
    res.send('pong');
});

app.get('/', (req, res) => {
    res.send('API is running...');
});

//routes
app.use('/api/v1/lead', leadRoutes);

app.all('*', (req, res, next) => {
    next(new Error(`Can't find ${req.originalUrl} on this server!`));
});

app.use(errorMiddleware);

export default app;