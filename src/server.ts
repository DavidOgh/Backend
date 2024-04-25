import express from 'express';
import weatherRoute from './routes/weatherRoutes.js';
import stormRoute from './routes/stormRoutes.js';
import cors from "cors";

// We will create an express app
const app = express();
app.use(cors())

// The port that the express server will listen on
const PORT = 3000;

app.use(express.json());

// We define our first route
app.use('/api/weather', weatherRoute);
app.use('/api/storm', stormRoute);
// Start the express server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});