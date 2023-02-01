import express from 'express';
import { addTruck, deleteTruck, findTrucks, findTruckById, updateTruck, } from './db/models.js';
import { checkColumns } from './utils.js';

const app = express();

// middleware
app.use(express.json());


// index
app.get('/', async (req, res) => {
  try {
    const trucks = await findTrucks();
    res.status(200).send(trucks);
  } catch (e) {
    res.status(500).send(e);
  }
});

// create
app.post('/trucks', async (req, res) => {
  const body = req.body;
  if (!checkColumns(body)) {
    res.status(400).send('Invalid column name');
  }
  try {
    const rows = await addTruck(body);
    res.status(201).send(rows);
  } catch (e) {
    res.status(500).send(e);
  }
});

// read
app.get('/trucks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const truck = await findTruckById(id);
    res.status(200).send(truck);
  } catch (e) {
    res.status(500).send(e);
  }
});

// update
app.put('/trucks/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  if (!checkColumns(body)) {
    res.status(400).send('Invalid column name');
  };
  try {
    const rows = await updateTruck(id, body);
    res.status(204).send(rows);
  } catch (e) {
    res.status(500).send(e);
  }
});

// delete
app.delete('/trucks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const rows = await deleteTruck(id);
    res.status(202).send(rows);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(3000);