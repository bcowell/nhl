import express from 'express';
import morgan from 'morgan';
import router from './router';

// Initialize http server
const app = express();

// Logger that outputs all requests into the console
app.use(morgan('combined'));

app.use('/api', router);

const server = app.listen(3001, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});