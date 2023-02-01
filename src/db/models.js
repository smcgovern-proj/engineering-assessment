import sql from './db.js';

const addTruck = async (body) => {
  const res = await sql`
    INSERT INTO trucks ${sql(body)}
  `;
  return res;
};

const deleteTruck = async (locationid) => {
  const res = await sql`
    DELETE FROM trucks WHERE locationid = ${locationid}
  `;
  return res;
};

const findTrucks = async () => {
  const trucks = await sql`
    SELECT * FROM trucks LIMIT 5
  `;
  return trucks;
};

const findTruckById = async (id) => {
  const truck = await sql`
    SELECT * FROM trucks WHERE locationid = ${id}
  `;
  return truck;
};

const findTrucksByName = async (name) => {
  const trucks = await sql`
    SELECT * FROM trucks WHERE applicant LIKE ${name}
  `;
  return trucks;
};

const updateTruck = async (locationid, body) => {
  const res = await sql`
    UPDATE trucks SET ${sql(body)} WHERE locationid = ${locationid}
  `;
  return res;
};

export {
  addTruck,
  deleteTruck,
  findTrucks,
  findTruckById,
  updateTruck,
};