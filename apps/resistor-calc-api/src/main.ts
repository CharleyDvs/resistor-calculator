import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';

import {API_PORT} from '@resistor-calculator/constants'

import { resistorRoutes } from './routes/resistorRoutes';

import { swaggerOptions } from './documentation/swaggerOptions';

import * as path from 'path';

const PORT = process.env.PORT || API_PORT;

const app = express();
const specs = swaggerJsdoc(swaggerOptions);

app.use(cors())

// Documentation
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

// Error handler middleware
app.use((err, _, res, _next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);

  res.status(statusCode).json({ message: err.message });

  return;
});

app.use('/resistor', resistorRoutes);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/api`);
});
