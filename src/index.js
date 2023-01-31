import express from 'express';
import { findTrucks } from './db/models.js';
const app = express();

app.get('/', async (req, res) => {
  const trucks = await findTrucks();
  res.send(trucks);
});

// create
app.post('/foodtrucks/:id', (req, res) => {

});
// read
// update
// delete

app.listen(3000);